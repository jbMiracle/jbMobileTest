import SagaTester from 'redux-saga-tester';
import { App as AppActionTypes } from '../../types';
import { App as AppActions } from '../../actions';
import forgotPasswordSaga from '.';
import strings from '../../../services/localization/localization.service';
import sendForgotPassword from '../../../services/forgotPassword/forgotPassword.service';

jest.mock('../../../services/forgotPassword/forgotPassword.service', () => jest.fn());

describe('ForgotPasswordSaga', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({ });
    sagaTester.start(forgotPasswordSaga);
  });

  it('can successfully execute the forgotPassword saga without issues', async () => {
    sendForgotPassword.mockImplementation(() => Promise.resolve({}));

    sagaTester.dispatch(AppActions.forgotPassword('test@test.com'));
    await sagaTester.waitFor(AppActionTypes.ForgotPasswordDone);
    expect(sagaTester.getLatestCalledAction()).toEqual(AppActions.forgotPasswordServiceDone(true, null));
    expect(sagaTester.getState()).toMatchSnapshot();
  });

  it('will fail because the service had a fatal error', async () => {
    sendForgotPassword.mockImplementation(() => { throw Error(strings('ForgotPassword.errors.user_not_found')); });

    sagaTester.dispatch(AppActions.forgotPassword('test@test.com'));
    await sagaTester.waitFor(AppActionTypes.ForgotPasswordDone);
    expect(sagaTester.getLatestCalledAction()).toEqual(AppActions.forgotPasswordServiceDone(false, strings('ForgotPassword.errors.user_not_found')));
    expect(sagaTester.getState()).toMatchSnapshot();
  });

  it('will fail because the service had a non-fatal error', async () => {
    sendForgotPassword.mockImplementation(() => false);

    sagaTester.dispatch(AppActions.forgotPassword('test@test.com'));
    await sagaTester.waitFor(AppActionTypes.ForgotPasswordDone);
    expect(sagaTester.getLatestCalledAction()).toEqual(AppActions.forgotPasswordServiceDone(false, strings('App.genericError')));
    expect(sagaTester.getState()).toMatchSnapshot();
  });
});
