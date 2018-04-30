import BaseReduxManager from './BaseReduxManager';

// ReactotronicReduxManager is not imported above, but rather conditionally
// required here so that the production build will not even touch the file.
const ReduxManagerClass = __DEV__ && (typeof __TESTING__ === 'undefined')
  ? require('./ReactotronicReduxManager').default
  : BaseReduxManager;

export default new ReduxManagerClass();
