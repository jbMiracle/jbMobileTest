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
    headerText={ strings('PendingUserStates.Rejected.header') }
  >
    <View style={ styleDef.childContainer }>

      <Text style={ styleDef.bodyCopy }>
        {strings('PendingUserStates.Rejected.body1')}
        <Text style={ [styleDef.bodyCopy, styleDef.bold] }>
          360MobileSupport@jbhunt.com
        </Text>.
      </Text>

      <C360Icon
        style={ styleDef.icon }
        name='jbh-Circle_Warning'
        size={ 100 }
      />

      <View style={ styleDef.footerContainer }>
        <Button
          warning
          block
          style={ styleDef.button }
          onPress={ () => navigation.navigate('Login') }
        >
          <Text style={ [styleDef.buttonText, styleDef.buttonTextBig] }>
            {strings('PendingUserStates.button.back_to_login')}
          </Text>
        </Button>
      </View>

    </View>
  </C360LogoContainer>
);
