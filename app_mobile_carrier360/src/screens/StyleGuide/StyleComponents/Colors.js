import React from 'react';
import filter from 'lodash/filter';
import map from 'lodash/map';
import { Text, View, ScrollView } from 'react-native';

const colors = [
  {
    color: '#007DBA',
    name: 'primary-blue',
    type: 'primary',
    textColor: '#F5FCFF',
  },
  {
    color: '#FEDB00',
    name: 'primary-yellow',
    type: 'primary',
    textColor: '#F5FCFF',
  },
  {
    color: '#00557E',
    name: 'primary-navy',
    type: 'primary',
    textColor: '#F5FCFF',
  },
  {
    color: '#993A29',
    name: 'primary-dark-red',
    type: 'primary',
    textColor: '#F5FCFF',
  },
  {
    color: '#699631',
    name: 'green',
    type: 'secondary',
    textColor: '#F5FCFF',
  },
  {
    color: '#D14F38',
    name: 'red',
    type: 'secondary',
    textColor: '#F5FCFF',
  },
  {
    color: '#FFFFFF',
    name: 'white',
    type: 'grey',
    textColor: '#000000',
  },
  {
    color: '#F9F9F9',
    name: 'grey-lite88',
    type: 'grey',
    textColor: '#000000',
  },
  {
    color: '#EFEFEF',
    name: 'grey-lite70',
    type: 'grey',
    textColor: '#000000',
  },
  {
    color: '#E3E3E3',
    name: 'grey-lite48',
    type: 'grey',
    textColor: '#000000',
  },
  {
    color: '#C9C9C9',
    name: 'grey',
    type: 'grey',
    textColor: '#000000',
  },
  {
    color: '#939393',
    name: 'grey-dark27',
    type: 'grey',
    textColor: '#000000',
  },
  {
    color: '#444444',
    name: 'grey-dark66',
    type: 'grey',
    textColor: '#F5FCFF',
  },
  {
    color: '#000000',
    name: 'black',
    type: 'grey',
    textColor: '#F5FCFF',
  },
];

const styles = {
  subHeadingText: {
    paddingTop: 20,
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
  },
  colorSwatch: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swatchText: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
};

const Colors = () => {
  const primaryColors = filter(colors, color => color.type === 'primary');
  const secondaryColors = filter(colors, color => color.type === 'secondary');
  const greyColors = filter(colors, color => color.type === 'grey');
  return (
    <View>
      <View>
        <Text style={ { ...styles.subHeadingText, paddingTop: 0 } }>Primary</Text>
        <ScrollView>{ renderColorSwatches(primaryColors) }</ScrollView>
      </View>
      <View>
        <Text style={ styles.subHeadingText }>Secondary</Text>
        <ScrollView>{ renderColorSwatches(secondaryColors) }</ScrollView>
      </View>
      <View>
        <Text style={ styles.subHeadingText }>Greys</Text>
        <ScrollView>{ renderColorSwatches(greyColors) }</ScrollView>
      </View>
    </View>
  );
};

function renderColorSwatches(colorList) {
  return map(colorList, (colorData, index) => {
    const { color, name, textColor } = colorData;
    return (
      <View key={ index } style={ { paddingTop: 20 } }>
        <View style={ { backgroundColor: color, ...styles.colorSwatch } }>
          <Text style={ { color: textColor, ...styles.swatchText } }>{ name }</Text>
          <Text style={ { color: textColor, ...styles.swatchText } }>{ color }</Text>
        </View>
      </View>
    );
  });
}

export default Colors;
