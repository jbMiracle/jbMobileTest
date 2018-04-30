import Config from 'react-native-config';
import request from '../request';
import strings from '../localization/localization.service';

export default function sendForgotPassword(email) {
  const fullUrl = Config.FORGOT_PASSWORD_URL.replace('{email}', email);
  const requestOptions = {
    url: fullUrl,
    method: 'GET',
    omitAuth: true,
  };

  return request(requestOptions)
    .then((result) => {
      let errorMessage = strings('App.genericError');
      if (result.success === true && result.status) {
        const status = result.status.toLowerCase();
        if (status !== 'success') {
          errorMessage = strings(`ForgotPassword.errors.${status}`, { defaultValue: errorMessage });
          throw new Error(errorMessage);
        }
      } else {
        throw new Error(errorMessage);
      }
      return result.data;
    });
}
