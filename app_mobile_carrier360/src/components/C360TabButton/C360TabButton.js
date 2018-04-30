import React, { Component } from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import { connectStyle, Text } from 'native-base';
import styleDef from './C360TabButton.style';
import C360Icon from '../C360Icon/C360Icon';

class C360TabButton extends Component {
  render() {
    const {
      id,
      onPress,
      style,
      tintColor,
      title,
    } = this.props;

    return (
      <TouchableOpacity
        testID={ `bottomnav_${id}` }
        style={ determineStyleType(this.props) }
        onPress={ onPress }
      >
        { renderIcon(this.props) }
        <Text style={ [style.tabTitle, { color: tintColor }] }>{ title }</Text>
      </TouchableOpacity>
    );
  }
}

function determineStyleType(props) {
  const {
    backgroundColor,
    indicator,
    main,
    style,
  } = props;

  const { tabItem, mainItem } = style;

  if (main) {
    return (Platform.OS === 'ios') ? tabItem : mainItem;
  }

  return [tabItem, { backgroundColor, borderTopWidth: 4, borderTopColor: indicator }];
}

function renderIcon(props) {
  const {
    backgroundColor,
    main,
    mainIconColor,
    name,
    style,
  } = props;

  const icon = (
    <C360Icon name={ name } size={ 20 } color={ mainIconColor } />
  );

  if (main) {
    return (
      <View style={ [style.mainButton, { backgroundColor }] }>
        { icon }
      </View>
    );
  }

  return icon;
}

export default connectStyle('C360.TabButton', styleDef)(C360TabButton);
