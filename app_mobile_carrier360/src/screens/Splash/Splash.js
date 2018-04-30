import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Animated, Easing, StatusBar } from 'react-native';
import NavigationBar from 'react-native-navbar-color';
import { connectStyle } from 'native-base';
import PropTypes from 'prop-types';
import styleDef from './Splash.style';
import { App as AppActions } from '../../state/actions';
import C360Colors from '../../themes/360Colors';

const jbh36Image = require('../../assets/images/36_JB_Logo.png');
const jbhWhiteCircle = require('../../assets/images/WhiteCircle.png');

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  genesis: () => dispatch(AppActions.genesis()),
});

class Splash extends Component {
  constructor() {
    super();
    NavigationBar.setColor(C360Colors.Black);
    StatusBar.setBarStyle('light-content');
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {
    this.props.genesis();
    this.startImageRotation();
  }

  startImageRotation() {
    this.RotateValueHolder.setValue(0);

    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start(() => this.startImageRotation());
  }

  render() {
    const { style } = this.props;
    const rotateImage = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const rotatingImageStyle = {
      width: 60,
      height: 60,
      position: 'absolute',
      top: 52,
      right: 10,
      transform: [{ rotate: rotateImage }],
    };

    return (
      <View style={ style.container }>
        <Animated.View style={ { position: 'relative' } } animation='pulse'>
          <Image source={ jbh36Image } />
          <Animated.Image
            style={ rotatingImageStyle }
            source={ jbhWhiteCircle }
          />
        </Animated.View>
      </View>
    );
  }
}

Splash.propTypes = {
  style: PropTypes.object.isRequired,
  genesis: PropTypes.func.isRequired,
};

const ReduxConnectedSplash = connect(mapStateToProps, mapDispatchToProps)(Splash);
export default connectStyle('C360.Splash', styleDef)(ReduxConnectedSplash);
