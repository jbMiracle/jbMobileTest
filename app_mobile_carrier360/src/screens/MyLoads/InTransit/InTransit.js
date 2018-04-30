import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import C360Colors from '../../../themes/360Colors';

class InTransit extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const msg = params !== undefined ? params.msg : 'Water those.';
    return (
      <View testID='in_transit' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>In Transit</Text>
        <Button
          style={ {
              backgroundColor: C360Colors.Yellow500, padding: 0, marginTop: 15, alignSelf: 'center',
          } }
          onPress={ () => this.props.navigation.navigate('Load Details', { msg }) }
        >
          <Text style={ { color: C360Colors.Blue600, fontSize: 12, fontWeight: 'bold' } }>Show Load Details</Text>
        </Button>
      </View>
    );
  }
}

export default InTransit;
