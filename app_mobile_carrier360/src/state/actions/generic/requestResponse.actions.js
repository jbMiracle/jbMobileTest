import { mapKeys, mapValues } from 'lodash';
import { RequestResponseSubactions } from '../../types/generic';

const requestResponseActions = mapKeys(RequestResponseSubactions, key => key.toLowerCase());

export const createRequestResponseActionSet = actionTypeSet =>
  mapValues(requestResponseActions, subtypeKey => payload => ({
    type: actionTypeSet[subtypeKey],
    payload,
  }));
