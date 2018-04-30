import React from 'react';
import { BackHandler } from 'react-native';
import { ReduxNavigator } from './ReduxNavigator';

describe('ReduxNavigator', () => {
  describe('back navigation', () => {
    it('will navigate back if there is a stack', () => {
      const nav = {
        index: 1,
      };
      const dispatch = jest.fn();
      const reduxNavigator = new ReduxNavigator({ nav, dispatch });
      const canGoBack = reduxNavigator.onBackPress();

      expect(dispatch).toMatchSnapshot();
      expect(canGoBack).toBe(true);
    });

    it('won\'t navigate back if there is not a stack', () => {
      const nav = {
        index: 0,
      };
      const dispatch = jest.fn();
      const reduxNavigator = new ReduxNavigator({ nav, dispatch });
      const canGoBack = reduxNavigator.onBackPress();

      expect(dispatch).not.toHaveBeenCalled();
      expect(canGoBack).toBe(false);
    });
  });

  describe('lifecycle functions', () => {
    beforeEach(() => {
      BackHandler.addEventListener = undefined;
      BackHandler.removeEventListener = undefined;
    });

    it('will add the back listener on mount', () => {
      BackHandler.addEventListener = jest.fn();
      const reduxNavigator = new ReduxNavigator({});
      reduxNavigator.componentDidMount();
      expect(BackHandler.addEventListener).toMatchSnapshot();
    });

    it('will remove the back listener on unmount', () => {
      BackHandler.removeEventListener = jest.fn();
      const reduxNavigator = new ReduxNavigator({});
      reduxNavigator.componentWillUnmount();
      expect(BackHandler.removeEventListener).toMatchSnapshot();
    });
  });
});
