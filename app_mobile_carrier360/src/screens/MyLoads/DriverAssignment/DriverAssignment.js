import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

class DriverAssignment extends Component {
  render() {
    return (
      <View testID='driver_assignment' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Driver Assignment</Text>
      </View>
    );
  }
}

export default DriverAssignment;
