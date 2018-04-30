import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, connectStyle } from 'native-base';
import styleDef from './FindLoads.style';

class FindLoads extends Component {
  render() {
    return (
      <View testID='findLoads' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Find Loads</Text>
      </View>
    );
  }
}

export default connectStyle('C360.FindLoads', styleDef)(FindLoads);
