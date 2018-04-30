import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Right, Badge } from 'native-base';
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';
import { menuOptionsStyle } from '../C360Header/C360Header.style';
import C360Colors from '../../themes/360Colors';
import C360Icon from '../C360Icon/C360Icon';

const { Popover } = renderers;

const NotificationMenu = ({ notifications, style }) => {
  const {
    headerIcon,
    itemSeparatorStyle,
    menuTriggerStyles,
    popoverProps,
  } = style;
  const notify = menuOptionsStyle({ type: 'notifications' });

  return (
    <Menu renderer={ Popover } rendererProps={ popoverProps }>
      <MenuTrigger customStyles={ menuTriggerStyles }>
        <C360Icon style={ headerIcon } name='jbh-Notification' size={ 23 } color={ C360Colors.White } />
      </MenuTrigger>
      <MenuOptions customStyles={ notify }>
        <FlatList
          data={ truncateNotificationList(notifications) }
          bounces={ false }
          renderItem={ renderNotification(style) }
          ItemSeparatorComponent={ () => <View style={ itemSeparatorStyle } /> }
        />
        { renderViewMore(notifications, style) }
      </MenuOptions>
    </Menu>
  );
};

function renderNotification(style) {
  const notify = menuOptionsStyle({ type: 'notifications' });
  const {
    notificationRow,
    badgeStyle,
    notificationTextView,
    alignFlexEnd,
    notificationHierarchy,
    timeStamp,
    fontSize10,
  } = style;

  return ({ item }) => (
    <MenuOption>
      <View style={ notificationRow }>
        <Badge style={ badgeStyle } />
        <View style={ notificationTextView }>
          <Text style={ [notify.optionText, notificationHierarchy] }> { item.key } </Text>
          <Text style={ notify.optionText }> { item.status } </Text>
        </View>
        <Right style={ alignFlexEnd } >
          <View style={ timeStamp }>
            <C360Icon name='jbh-Circle_Clock' color={ C360Colors.Grey600 } />
            <Text numberOfLines={ 1 } style={ [notify.optionText, fontSize10] }> { item.time } </Text>
          </View>
        </Right>
      </View>
    </MenuOption>
  );
}

function truncateNotificationList(notifications) {
  if (notifications.length > 4) {
    return notifications.slice(0, 4);
  }

  return notifications;
}

function renderViewMore(notifications, style) {
  if (notifications.length < 5) {
    return null;
  }

  return (
    <View style={ style.alignCenter }>
      <TouchableOpacity style={ style.moreNotificationButtonStyle }>
        <Text style={ style.moreNotificationTextStyle }>
          View all Notifications ({ notifications.length })
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default NotificationMenu;
