import React from 'react';
import { Text, View, FlatList } from 'react-native';

const typography = [
  {
    key: 'h1',
    heading: 'Heading 1 (H1)',
    headingStyle: {
      fontSize: 20,
      lineHeight: 24,
      paddingBottom: 5,
      fontFamily: 'ProximaNova-Semibold',
    },
    fontFamily: 'Proxima Nova',
    style: 'Bold',
    size: '20px',
    lineHeight: '24px',
    spacing: '0px',
  },
  {
    key: 'h2',
    heading: 'Heading 2 (H2)',
    headingStyle: {
      fontSize: 16,
      lineHeight: 18,
      paddingBottom: 5,
      fontFamily: 'ProximaNova-Semibold',
    },
    fontFamily: 'Proxima Nova',
    style: 'Bold',
    size: '16px',
    lineHeight: '18px',
    spacing: '0px',
  },
  {
    key: 'h3',
    heading: 'Heading 3 (H3) Text Entry Fields',
    headingStyle: {
      fontSize: 14,
      lineHeight: 16,
      paddingBottom: 5,
      fontFamily: 'ProximaNova-Regular',
    },
    fontFamily: 'Proxima Nova',
    style: 'Regular',
    size: '14px',
    lineHeight: '16px',
    spacing: '0px',
  },
  {
    key: 'disclaimer',
    heading: 'Nav and Disclaimer Copy',
    headingStyle: {
      fontSize: 10,
      lineHeight: 14,
      paddingBottom: 5,
      fontFamily: 'ProximaNova-Regular',
    },
    fontFamily: 'Proxima Nova',
    style: 'Regular',
    size: '10px',
    lineHeight: '14px',
    spacing: '0px',
  },
  {
    key: 'body',
    heading: 'Body Copy',
    headingStyle: {
      fontSize: 12,
      lineHeight: 14,
      paddingBottom: 5,
      fontFamily: 'ProximaNova-Regular',
    },
    fontFamily: 'Proxima Nova',
    style: 'Regular',
    size: '12px',
    lineHeight: '14px',
    spacing: '0px',
  },
  {
    key: 'special',
    heading: 'Special Heading (Prices)',
    headingStyle: {
      fontSize: 24,
      lineHeight: 28,
      paddingBottom: 5,
      fontFamily: 'ProximaNova-Semibold',
    },
    fontFamily: 'Proxima Nova',
    style: 'Bold',
    size: '24px',
    lineHeight: '28px',
    spacing: '0px',
  },
];

const styles = {
  category: {
    paddingLeft: 5,
    lineHeight: 16,
    fontSize: 14,
    fontFamily: 'ProximaNova-Light',
  },
  value: {
    paddingLeft: 5,
    lineHeight: 16,
    fontSize: 14,
    fontFamily: 'ProximaNova-Semibold',
  },
  textContainer: {
    flexDirection: 'row',
  },
};

const Typography = () => (
  <FlatList
    keyExtractor={ item => item.key }
    data={ typography }
    renderItem={ renderRow }
  />
);

function renderRow({ item, index }) {
  return (
    <View style={ { paddingTop: (index !== 0) ? 20 : 0 } }>
      <Text style={ item.headingStyle }>{ item.heading }</Text>
      <View style={ styles.textContainer }>
        <Text>{ '\u2022' }</Text>
        <Text style={ styles.category }>Font Family:</Text>
        <Text style={ styles.value }>{ item.fontFamily }</Text>
      </View>
      <View style={ styles.textContainer }>
        <Text>{ '\u2022' }</Text>
        <Text style={ styles.category }>Style:</Text>
        <Text style={ styles.value }>{ item.style }</Text>
      </View>
      <View style={ styles.textContainer }>
        <Text>{ '\u2022' }</Text>
        <Text style={ styles.category }>Size:</Text>
        <Text style={ styles.value }>{ item.size }</Text>
      </View>
      <View style={ styles.textContainer }>
        <Text>{ '\u2022' }</Text>
        <Text style={ styles.category }>Line Height (Leading):</Text>
        <Text style={ styles.value }>{ item.lineHeight }</Text>
      </View>
      <View style={ styles.textContainer }>
        <Text>{ '\u2022' }</Text>
        <Text style={ styles.category }>Character Spacing (Tracking):</Text>
        <Text style={ styles.value }>{ item.spacing }</Text>
      </View>
    </View>
  );
}

export default Typography;
