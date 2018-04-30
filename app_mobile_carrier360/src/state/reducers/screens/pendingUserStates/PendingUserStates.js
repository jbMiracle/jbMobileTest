import { get, mapValues, mapKeys } from 'lodash';
import { NavigationActions } from 'react-navigation';
import LoginPendingMessages from '../../../../navigators/auth/routes';

const screenData = mapValues(mapKeys(LoginPendingMessages), routeName => ({ routeName }));

export default function (state = {}, action) {
  if (action.type === NavigationActions.NAVIGATE) {
    return get(screenData, action.routeName, state);
  }

  return state;
}
