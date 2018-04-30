import {
  Platform,
  // Alert,
} from 'react-native';
import TouchID from 'react-native-touch-id';
import BiometryTypes from './biometry-types';

export async function queryBiometricSupport() {
  try {
    // On Android: boolean
    // On iOS: string of touch/face
    const supportResult = await TouchID.isSupported();
    const supportedType = Platform.select({
      android: supportResult ? BiometryTypes.TouchID : null,
      ios: BiometryTypes[supportResult],
    });
    return {
      isSupported: !!supportResult,
      supportedType,
    };
  } catch (err) {
    return {
      isSupported: false,
      supportedType: null,
    };
  }
}

// const alertResult = result => new Promise((resolve) => {
//   Alert.alert(
//     'Biometric Authentication Result!',
//     result,
//     [
//       { text: 'OK', onPress: resolve },
//     ],
//     { cancelable: false }
//   );
// });

export async function authenticate(message = 'Pretty Please!') {
  try {
    const result = await TouchID.authenticate(message);
    // await alertResult(JSON.stringify(result));
    return result;
  } catch (err) {
    // User cancelling dialog brings us here.. now what?
    // On failed touch attempt:
    //   Android immediately throws failure
    //   iOS gives the user another chance before yielding a result/failure
    //     The user can try again or tap 'use password' which then throws back "LAErrorUserFallback"(iOS) / "Touch ID Error"(Android)
    // alertResult(JSON.stringify(err, null, 2));
    return false;
  }
}
