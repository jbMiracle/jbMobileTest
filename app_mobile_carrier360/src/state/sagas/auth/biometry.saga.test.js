import SagaTester from 'redux-saga-tester';
import { Auth as AuthActions } from '../../actions';
import authSaga from '.';

describe('BiometrySaga', () => {
  let sagaTester = null;
  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(authSaga);
  });

  test('queryBiometricSupport', async () => {
    sagaTester.dispatch(AuthActions.queryBiometricSupport());
    expect(sagaTester.getState()).toMatchSnapshot();
  });
  test('biometricSupportDetermined', async () => {
    sagaTester.dispatch(AuthActions.biometricSupportDetermined('face_id'));
    expect(sagaTester.getState()).toMatchSnapshot();
  });
  test('setupBiometricLogin', async () => {
    sagaTester.dispatch(AuthActions.setupBiometricLogin());
    expect(sagaTester.getState()).toMatchSnapshot();
  });
  test('biometricLoginSetup', async () => {
    sagaTester.dispatch(AuthActions.biometricLoginSetup());
    expect(sagaTester.getState()).toMatchSnapshot();
  });
  test('userAuthenticated', async () => {
    sagaTester.dispatch(AuthActions.userAuthenticated());
    expect(sagaTester.getState()).toMatchSnapshot();
  });
});
