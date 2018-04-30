import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { AppNavigator } from './AppNavigator';

export class ReduxNavigator extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const addListener = createReduxBoundAddListener('root');
    const navHelpers = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener,
    });

    return <AppNavigator navigation={ navHelpers } />;
  }
}
const mapStateToProps = state => ({
  nav: state.nav,
});

ReduxNavigator.propTypes = {
  nav: PropTypes.shape({
    index: PropTypes.number,
    isTransitioning: PropTypes.bool,
    routes: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ReduxNavigator);
