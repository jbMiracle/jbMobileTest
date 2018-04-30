import React, { Component } from 'react';
import { Text, View } from 'react-native';

class OfferDetails extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View testID='offers' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Offer Details</Text>
        <Text style={ { fontWeight: 'bold' } } >{ params && params.msg }</Text>
      </View>
    );
  }
}

export default OfferDetails;
