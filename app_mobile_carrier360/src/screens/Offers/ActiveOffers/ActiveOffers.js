import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import C360Colors from '../../../themes/360Colors';

class ActiveOffers extends Component {
  render() {
    return (
      <View testID='offers' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Active Offers</Text>
        <Button
          style={ {
              backgroundColor: C360Colors.Yellow500, padding: 0, marginTop: 15, alignSelf: 'center',
          } }
          onPress={ () => this.props.navigation.navigate('Offer Details', { msg: 'Here are the details...' }) }
        >
          <Text style={ { color: C360Colors.Blue600, fontSize: 12, fontWeight: 'bold' } }>Show Offer Details</Text>
        </Button>
      </View>
    );
  }
}

export default ActiveOffers;
