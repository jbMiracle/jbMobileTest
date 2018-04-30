import React, { Component } from 'react';
import { Animated, View, Vibration } from 'react-native';
import { Text, Input, connectStyle } from 'native-base';
import PropTypes from 'prop-types';
import { omit, isFunction } from 'lodash';
import * as Animatable from 'react-native-animatable';
import { StyledC360Icon } from '../C360Icon/C360Icon';
import C360Colors from '../../themes/360Colors';
import styleDef from './C360InputField.style';

class C360InputField extends Component {
  static propTypes = {
    placeHolderText: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    leftIcon: PropTypes.string,
    error: PropTypes.bool,
    errorVibrate: PropTypes.bool,
    dark: PropTypes.bool,
  };

  static defaultProps = {
    onChangeText: undefined,
    value: null,
    leftIcon: null,
    error: false,
    errorVibrate: false,
    dark: false,
  };

  state = {
    showTitle: false,
    topAnimationValue: new Animated.Value(2),
  };

  componentWillMount() {
    const { value } = this.props;
    if (value) {
      this.setState({ showTitle: true, text: value });
      this.showTitle();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error && !this.props.error) {
      this.animationViewRef.shake();

      if (this.props.errorVibrate) {
        Vibration.vibrate();
      }
    }
    if (nextProps.value && nextProps.value !== this.state.text) {
      this.setState(state => ({ ...state, text: nextProps.value }));
    }
  }

  onFocus = () => {
    const { onFocus } = this.inputProps;
    this.setState(() => ({ showTitle: true }));
    if (isFunction(onFocus)) {
      onFocus();
    }
  };

  onBlur = () => {
    const { onBlur } = this.inputProps;
    this.setState(state => ({ showTitle: !!state.text }));
    if (isFunction(onBlur)) {
      onBlur();
    }
  };

  onChangeText = (text) => {
    const { onChangeText } = this.inputProps;
    this.setState(state => ({ ...state, text }));
    if (isFunction(onChangeText)) {
      onChangeText(text);
    }
    if (isFunction(this.props.onChangeText)) {
      this.props.onChangeText(text);
    }
  };

  // This ref function breaks styleguide, but this paradigm is required for use of Animated Library.
  // See https://github.com/oblador/react-native-animatable#imperative-usage
  getAnimationViewRef = (ref) => this.animationViewRef = ref; // eslint-disable-line

  animateTitle(toValue) {
    Animated.timing(this.state.topAnimationValue, { toValue, duration: 150 }).start();
  }

  hideTitle() {
    this.animateTitle(2);
  }

  showTitle() {
    this.animateTitle(30);
  }

  renderInput = () => (
    <Input
      key='input'
      value={ this.state.text }
      selectionColor={ this.props.dark ? C360Colors.White : C360Colors.Grey600 } /* Will override if passed in the props */
      { ...this.inputProps }
      onFocus={ this.onFocus }
      onBlur={ this.onBlur }
      onChangeText={ this.onChangeText }
    />
  );

  renderBody(leftIconProps, rightIconProps) {
    const { dark, placeHolderText } = this.props;
    const { showTitle, topAnimationValue } = this.state;
    if (showTitle) {
      this.showTitle();
    } else {
      this.hideTitle();
    }
    const leftSpaceStyle = leftIconProps ? styleDef.leftMargin : styleDef.leftAlign;
    const rightSpaceStyle = rightIconProps ? styleDef.rightMargin : styleDef.rightAlign;
    return (
      <View
        key='view'
        style={ [styleDef.body, leftSpaceStyle, rightSpaceStyle] }
      >
        <Animated.View style={ [styleDef.animatedView, { bottom: topAnimationValue }] }>
          <Text
            key='text'
            style={ showTitle
              ? [styleDef.title, !dark && styleDef.blueFont]
              : [styleDef.placeHolder, !dark && styleDef.greyFont]
            }
          >
            {showTitle ? placeHolderText.toUpperCase() : placeHolderText}
          </Text>
        </Animated.View>
        {this.renderInput()}
      </View>
    );
  }

  renderChildren() {
    const { leftIcon, error } = this.props;
    const leftIconProps = leftIcon ? ({ name: leftIcon }) : null;
    const rightIconProps = error ? styleDef.errorIcon : null;
    const parentPropTypes = this.constructor.propTypes;
    const keysToBeOmitted = [...Object.keys(parentPropTypes), 'style'];
    /* This is done to filter TextInput props. Eg: secureTextEntry, maxLength, etc., */
    this.inputProps = omit(this.props, keysToBeOmitted);
    return [
      leftIconProps ? this.renderSideIcon(leftIconProps) : null,
      this.renderBody(leftIconProps, rightIconProps),
      rightIconProps ? this.renderSideIcon(rightIconProps) : null,
    ];
  }

  renderSideIcon = props => (
    <StyledC360Icon key={ props.name } { ...props } />
  );

  render() {
    return (
      <Animatable.View
        ref={ this.getAnimationViewRef }
      >
        <View
          ref={ (component) => {
            this.root = component;
          } }
          { ...this.props }
        >
          {this.renderChildren()}
        </View>
      </Animatable.View>
    );
  }
}

export const StyledInputField = connectStyle('C360.InputField', {})(C360InputField);
export const AnimatableStyledInputField = Animatable.createAnimatableComponent(StyledInputField);
export { AnimatableStyledInputField as C360InputField };
