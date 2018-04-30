import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

class AcceptanceNeeded extends Component {
  render() {
    return (
      <View testID='acceptance_needed' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Acceptance Needed</Text>
      </View>
    );
  }
}

export default AcceptanceNeeded;
