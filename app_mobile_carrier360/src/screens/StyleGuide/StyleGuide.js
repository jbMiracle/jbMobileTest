import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import { Header, Body } from 'native-base';
import SideMenu from 'react-native-side-menu';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Menu from './Menu';
import StyleGuideItem from './StyleGuideItem';
import styleGuideConfig from './StyleComponents/config';

const viewStyles = StyleSheet.flatten({
  button: {
    position: 'absolute',
    top: (Platform.OS === 'ios') ? 20 : 10,
    padding: 10,
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#214559',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'ProximaNova-Semibold',
    paddingTop: (Platform.OS === 'ios') ? 0 : 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#F5FCFF',
    top: (Platform.OS === 'ios') ? 5 : 0,
  },
  componentContainer: {
    padding: 20,
  },
  itemDivider: {
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 0,
    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 1,
  },
  componentHeader: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
});

export default class StyleGuide extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  onMenuItemSelected = (itemIndex) => {
    this.setState({ isOpen: false });
    this.flatListRef.scrollToIndex({ animated: false, index: itemIndex, viewOffset: 10 });
  };

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const menu = <Menu onItemSelected={ this.onMenuItemSelected } isOpen={ this.state.isOpen } />;

    return (
      <SideMenu
        menu={ menu }
        isOpen={ this.state.isOpen }
        onChange={ isOpen => this.updateMenuState(isOpen) }
      >
        <View style={ viewStyles.container }>
          <Header style={ viewStyles.header }>
            <Body style={ viewStyles.headerTextContainer }>
              <Text style={ viewStyles.headerText }>Style Guide</Text>
            </Body>
          </Header>
          <FlatList
            ref={ (ref) => { this.flatListRef = ref; } }
            keyExtractor={ item => item.menuTitle }
            data={ styleGuideConfig }
            renderItem={ StyleGuideItem({ style: viewStyles }) }
          />
        </View>
        <TouchableOpacity onPress={ this.toggle } style={ viewStyles.button } >
          <FAIcon name='bars' size={ 22 } style={ { color: '#214559' } } />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => closeStyleGuide(this.props) }
          style={ { right: 0, ...viewStyles.button, top: (Platform.OS === 'ios') ? 18 : 8 } }
        >
          <FAIcon name='times' size={ 22 } style={ { color: '#214559' } } />
        </TouchableOpacity>
      </SideMenu>
    );
  }
}

function closeStyleGuide(props) {
  return props.navigation.navigate('Main');
}
