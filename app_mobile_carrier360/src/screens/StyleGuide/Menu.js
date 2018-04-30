import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';
import { Container, List, ListItem, Header, Body, Title } from 'native-base';
import styleGuideConfig from './StyleComponents/config';

const window = Dimensions.get('window');

const menuStyles = StyleSheet.flatten({
  header: {
    backgroundColor: '#1C1E2A',
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#2C2F3D',
  },
});

export default function Menu({ onItemSelected, isOpen }) {
  const flexValue = (Platform.OS === 'ios') ? 0 : determineAndroidFlexValue(isOpen);

  return (
    <Container>
      <Header style={ { ...menuStyles.header, flex: flexValue } }>
        <Body>
          <Title style={ { color: '#F5FCFF' } }>Styles</Title>
        </Body>
      </Header>
      <List
        dataArray={ styleGuideConfig }
        renderRow={ renderMenuItems(onItemSelected) }
        style={ menuStyles.menu }
      />
    </Container>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

function renderMenuItems(onItemSelected) {
  return (rowData, sectionId, rowId) => (
    <ListItem>
      <Text
        style={ { color: 'white' } }
        onPress={ () => onItemSelected(parseInt(rowId, 10)) }
      >
        { rowData.menuTitle }
      </Text>
    </ListItem>
  );
}

function determineAndroidFlexValue(isOpen) {
  return (isOpen) ? 0 : 1;
}
