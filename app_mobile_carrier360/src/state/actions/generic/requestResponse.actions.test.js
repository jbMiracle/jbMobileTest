import { isFunction } from 'lodash';
import { createRequestResponseActionSet } from './requestResponse.actions';
import { createRequestResponseActionTypeSet } from '../../types/generic';

describe('createRequestResponseActionSet()', () => {
  const BaseActionName = 'ACTION_X';
  const ActionXTypeSet = createRequestResponseActionTypeSet(BaseActionName);
  const actionCreatorSet = createRequestResponseActionSet(ActionXTypeSet);

  ['start', 'fail', 'succeed'].forEach((subaction) => {
    it(`should create a ${subaction} action creator`, () => {
      expect(isFunction(actionCreatorSet[subaction])).toBe(true);
    });
  });

  const examplePayload = { message: 'hello' };

  ['start', 'fail', 'succeed'].forEach((subaction) => {
    it(`should create a ${subaction} action`, () => {
      const expectedAction = {
        type: `${BaseActionName}/${subaction.toUpperCase()}`,
        payload: examplePayload,
      };
      const actualAction = actionCreatorSet[subaction](examplePayload);
      expect(actualAction).toEqual(expectedAction);
    });
  });
});
