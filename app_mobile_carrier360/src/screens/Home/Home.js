import React, { Component } from 'react';
import { View } from 'react-native';
import { connectStyle, Button, Text } from 'native-base';
import GestureRecognizer from 'react-native-swipe-gestures';
import Config from 'react-native-config';
import styleDef from './Home.style';
import C360Colors from '../../themes/360Colors';

function onSwipeRight(props) {
  const { navigation } = props;

  return () => navigation.navigate('StyleGuide');
}

const HomeContent = (props) => {
  const { ENVIRONMENT } = Config;
  const buttonStyles = {
    backgroundColor: C360Colors.Blue500,
    padding: 0,
    marginTop: 15,
    alignSelf: 'center',
  };

  const containerStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' };
  const textStyles = { color: C360Colors.White, fontSize: 12, fontWeight: 'bold' };

  return (
    <View testID='home' style={ containerStyle }>
      <Text>Build: { ENVIRONMENT }</Text>
      <Button
        style={ buttonStyles }
        onPress={ () => props.navigation.navigate('Load Details', { msg: 'Water is wet.' }) }
      >
        <Text style={ textStyles }>Show Specific Load Details</Text>
      </Button>
    </View>
  );
};

function renderHomeScreen(props) {
  if (__DEV__) {
    return (
      <GestureRecognizer onSwipeRight={ onSwipeRight(props) } style={ { flex: 1 } } >
        <HomeContent { ...props } />
      </GestureRecognizer>
    );
  }

  return <HomeContent />;
}

class Home extends Component {
  render() {
    return renderHomeScreen(this.props);
  }
}

export default connectStyle('C360.Home', styleDef)(Home);
