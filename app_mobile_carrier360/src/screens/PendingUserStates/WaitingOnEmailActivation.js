import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import strings from '../../services/localization';
import C360LogoContainer from '../../components/C360LogoContainer/C360LogoContainer';
import C360Icon from '../../components/C360Icon/C360Icon';
import styleDef from './style';

export default ({ navigation }) => (
  <C360LogoContainer
    showBackButton={ false }
    headerText={ strings('PendingUserStates.thank_you') }
  >
    <View style={ styleDef.childContainer }>

      <Text style={ styleDef.bodyCopy }>
        {strings('PendingUserStates.WaitingOnEmailActivation.body1')}
        <Text style={ [styleDef.bodyCopy, styleDef.bold] }> 360MobileSupport@jbhunt.com</Text>.
      </Text>

      <C360Icon
        style={ styleDef.icon }
        name='jbh-Wide_DryVan'
        size={ 230 }
      />

      <View style={ styleDef.footerContainer }>
        <Button
          bordered
          warning
          style={ styleDef.button }
          onPress={ () => navigation.navigate('Login') }
        >
          <Text style={ [styleDef.buttonText, styleDef.buttonOutlineText] }>
            {strings('PendingUserStates.button.resend_email')}
          </Text>
        </Button>
        <Button
          warning
          block
          style={ [styleDef.button, { marginLeft: 10 }] }
          onPress={ () => navigation.navigate('Main') }
        >
          <Text style={ styleDef.buttonText }>
            {strings('PendingUserStates.button.continue_to_profile')}
          </Text>
        </Button>
      </View>

    </View>
  </C360LogoContainer>
);
