import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';
import { menuOptionsStyle } from '../C360Header/C360Header.style';
import C360Colors from '../../themes/360Colors';
import C360Icon from '../C360Icon/C360Icon';
import strings from '../../services/localization';

const demoProfileAvatar = require('../../assets/images/profileAvatar.jpeg');

const { Popover } = renderers;
const menuTextOptions = { scope: 'MoreMenu' };

const MoreMenu = ({ menuList, style }) => {
  const {
    headerIcon,
    profileMenuView,
    mainText,
    subText,
    flexColumn,
    popoverProps,
    menuTriggerStyles,
  } = style;
  const mainMenu = menuOptionsStyle({ type: 'main' });

  return (
    <Menu renderer={ Popover } rendererProps={ popoverProps } >
      <MenuTrigger customStyles={ menuTriggerStyles }>
        <C360Icon
          style={ headerIcon }
          name='jbh-Menu_Card'
          size={ 23 }
          color={ C360Colors.White }
        />
      </MenuTrigger>
      <MenuOptions customStyles={ mainMenu }>
        <View style={ profileMenuView }>
          { renderProfileAvatar(style) }
          <View style={ flexColumn }>
            <Text style={ mainText }>David Hasselhoff</Text>
            <Text style={ subText }>Driver</Text>
            <Text style={ subText }>ABC Trucking</Text>
          </View>
        </View>
        <FlatList
          data={ menuList }
          bounces={ false }
          renderItem={ renderMenuItem(style) }
        />
      </MenuOptions>
    </Menu>
  );
};

function renderMenuItem(style) {
  const { marginRight25 } = style;
  const mainMenu = menuOptionsStyle({ type: 'main' });

  return ({ item }) => (
    <MenuOption value={ item.key }>
      <C360Icon style={ marginRight25 } name={ item.icon } size={ 15 } color={ C360Colors.Grey900 } />
      <Text style={ mainMenu.optionText }>{strings(item.key, menuTextOptions)}</Text>
    </MenuOption>
  );
}

function renderProfileAvatar(style) {
  // for now, avatarExists is always true for demo purposes, until we get actual accounts in the app
  const avatarExists = true;
  const avatar = avatarExists
    ? demoProfileAvatar
    : demoProfileAvatar; // here, we will have the placeholder image

  return (
    <Image
      resizeMode='cover'
      style={ style.profileAvatar }
      source={ avatar }
    />
  );
}

export default MoreMenu;
