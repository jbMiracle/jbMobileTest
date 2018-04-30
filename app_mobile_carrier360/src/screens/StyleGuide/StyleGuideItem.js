import React from 'react';
import { View, Text } from 'react-native';

export default ({ style }) => {
  const { componentContainer, componentHeader, itemDivider } = style;

  return ({ item }) => {
    const StyleComponent = item.component;
    const props = item.props || {};

    return (
      <View style={ componentContainer }>
        <Text style={ componentHeader }>{ item.menuTitle }</Text>
        <StyleComponent { ...props } />
        <View style={ itemDivider } />
      </View>
    );
  };
};
