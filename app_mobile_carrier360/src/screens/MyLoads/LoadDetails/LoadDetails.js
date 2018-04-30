import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LoadDetails extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View testID='load_details' style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <Text>Load Details</Text>
        <Text style={ { fontWeight: 'bold' } } >{ params && params.msg }</Text>
      </View>
    );
  }
}

export default LoadDetails;
