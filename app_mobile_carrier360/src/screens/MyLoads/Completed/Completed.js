import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

class Completed extends Component {
  render() {
    return (
      <View testID='completed' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Completed</Text>
      </View>
    );
  }
}

export default Completed;
