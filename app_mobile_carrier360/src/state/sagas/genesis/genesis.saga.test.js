import SagaTester from 'redux-saga-tester';
import { App as AppActions } from '../../actions';
import genesisSaga from '.';

describe('GenesisSaga', () => {
  let sagaTester = null;
  beforeEach(() => {
    sagaTester = new SagaTester({ });
    sagaTester.start(genesisSaga);
  });

  test('the saga can start the app successfully', async () => {
    sagaTester.dispatch(AppActions.genesis());
    expect(sagaTester.getState()).toMatchSnapshot();
  });
});
