import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, connectStyle } from 'native-base';
import styleDef from './Perks.style';

class Perks extends Component {
  render() {
    return (
      <View testID='perks' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Perks</Text>
      </View>
    );
  }
}

export default connectStyle('C360.Perks', styleDef)(Perks);
