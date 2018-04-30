import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Header, Left, Right, Button, connectStyle } from 'native-base';
import { styleDef } from './C360Header.style';
import NotificationMenu from '../NotificationMenu/NotificationMenu';
import MoreMenu from '../MoreMenu/MoreMenu';
import C360Colors from '../../themes/360Colors';
import C360Icon from '../C360Icon/C360Icon';

const menuList = [
  { key: 'profile', icon: 'jbh-Contacts' },
  { key: 'manage_users', icon: 'jbh-User_Group' },
  { key: 'feedback', icon: 'jbh-Contact_Mail' },
  { key: 'sign_out', icon: 'jbh-Menu_Logout' },
];

const notificationsList = [
  { key: 'Load HV51606 - Status Update', status: 'You have been outbid', time: '2m' },
  {
    key: 'Favorite Lanes - Available Load',
    status: 'Dallas, TX, 73019 - San Antonio, TX, 78719',
    time: '23m',
  },
  { key: 'Manage Users - Approval Needed', status: 'New User Paul', time: '2d' },
  { key: 'Load HV51607 - Status Update', status: 'You have been outbid', time: '2m' },
  { key: 'Load HV51608 - Status Update', status: 'You have been served', time: '5m' },
];

const headerLogo = require('../../assets/images/360Logo-Reversed.png');
const demoProfileAvatar = require('../../assets/images/profileAvatar.jpeg');

class C360Header extends PureComponent {
  renderProfileAvatar = () => {
    // for now, avatarExists is always true for demo purposes, until we get actual accounts in the
    // app
    const avatarExists = true;
    const avatar = avatarExists
      ? demoProfileAvatar
      : demoProfileAvatar; // here, we will have the placeholder image

    return (
      <Image
        resizeMode='cover'
        style={ styleDef.profileAvatar }
        source={ avatar }
      />
    );
  };

  render() {
    const {
      showBackButton, backButtonOnPress, style, title,
    } = this.props;
    const { header } = this.props.style;
    return (
      <View>
        <Header style={ header } iosBarStyle='light-content' androidStatusBarColor={ C360Colors.Blue500 }>
          <Left>
            {renderBackButton({
              showBackButton, backButtonOnPress, style, title,
            })}
          </Left>
          <Right />

          <NotificationMenu notifications={ notificationsList } style={ style } />
          <MoreMenu menuList={ menuList } style={ style } />
        </Header>
      </View>
    );
  }
}

function renderBackButton({
  showBackButton, backButtonOnPress, style, title,
}) {
  const { backButtonStyle, headerLogoStyle } = style;

  if (showBackButton) {
    return (
      <Button iconLeft transparent light testID='header_backButton' onPress={ backButtonOnPress }>
        <C360Icon name='jbh-Chevron_Back' color='white' size={ 20 } />
        <Text style={ backButtonStyle }>{title}</Text>
      </Button>
    );
  }

  return <Image style={ headerLogoStyle } source={ headerLogo } />;
}

export default connectStyle('C360.Header', styleDef)(C360Header);

C360Header.propTypes = {
  showBackButton: PropTypes.bool.isRequired,
  backButtonOnPress: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
