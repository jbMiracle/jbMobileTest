import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connectStyle, Text, Button, H1, H2, H3 } from 'native-base';

const styles = {
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonTertiaryStyle: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonTertiaryCenterStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  subHeadingText: {
    paddingTop: 20,
    textAlign: 'center',
  },
};

class NBComponents extends PureComponent {
  render() {
    return (
      <View>
        <View>
          <H1 style={ { ...styles.subHeadingText, paddingTop: 0 } }>Text Items</H1>
          <H1 style={ { paddingTop: 10 } }>H1 Text</H1>
          <H2 style={ { paddingTop: 10 } }>H2 Text</H2>
          <H3 style={ { paddingTop: 10 } }>H3 Text</H3>
          <Text style={ { paddingTop: 12 } }>Basic Text</Text>
        </View>
        <View>
          <H1 style={ { ...styles.subHeadingText, paddingTop: 0 } }>Buttons</H1>
          <H2>Primary Buttons</H2>
          <Button
            style={ styles.buttonStyle }
            block
            large
            primary
          >
            <Text>Primary</Text>
          </Button>
          <Button
            style={ styles.buttonStyle }
            block
            large
            primaryDark
          >
            <Text>Primary Dark</Text>
          </Button>
          <Button
            style={ styles.buttonStyle }
            block
            large
            primary
            disabled
          >
            <Text>Primary Disabled</Text>
          </Button>

          <H2>Secondary Buttons</H2>
          <Button
            style={ styles.buttonStyle }
            block
            large
            secondary
          >
            <Text>Secondary</Text>
          </Button>
          <Button
            style={ styles.buttonStyle }
            block
            large
            secondaryDark
          >
            <Text>Secondary Dark</Text>
          </Button>

          <H2>Side by Side Buttons</H2>
          <View style={ styles.buttonContainer }>
            <Button
              style={ styles.buttonTertiaryStyle }
              large
              block
              primary
            >
              <Text>One</Text>
            </Button>
            <Button
              style={ [styles.buttonTertiaryStyle, styles.buttonTertiaryCenterStyle] }
              large
              block
              primary
            >
              <Text>Two</Text>
            </Button>
            <Button
              style={ styles.buttonTertiaryStyle }
              large
              block
              primary
            >
              <Text>Three Wrapped</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default connectStyle('C360.NBComponents', styles)(NBComponents);
