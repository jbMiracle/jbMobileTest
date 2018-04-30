import { AppNavigator, initialRouteName } from '../../../navigators/AppNavigator';

const RootRouter = AppNavigator.router;
const initialState = RootRouter.getStateForAction(RootRouter.getActionForPathAndParams(initialRouteName));

export default (state = initialState, action) => RootRouter.getStateForAction(action, state) || state;
