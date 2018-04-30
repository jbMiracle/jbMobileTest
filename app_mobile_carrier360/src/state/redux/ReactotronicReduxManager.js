import Reactotron from 'reactotron-react-native';
import BaseReduxManager from './BaseReduxManager';

export default class ReactotronicReduxManager extends BaseReduxManager {
  createSagaMonitor() {
    return Reactotron.createSagaMonitor();
  }

  createStore(...args) {
    return Reactotron.createStore(...args);
  }
}
