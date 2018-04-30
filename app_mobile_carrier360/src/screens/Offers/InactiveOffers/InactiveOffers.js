import React, { Component } from 'react';
import { Text, View } from 'react-native';

class InactiveOffers extends Component {
  render() {
    return (
      <View testID='offers' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Inactive Offers</Text>
      </View>
    );
  }
}

export default InactiveOffers;
