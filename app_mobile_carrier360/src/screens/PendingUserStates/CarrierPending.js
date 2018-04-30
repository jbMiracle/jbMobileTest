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
        {strings('PendingUserStates.CarrierPending.body1')}
        <Text style={ [styleDef.bodyCopy, styleDef.bold] }>
        1-800-423-6892
        </Text>
        {strings('PendingUserStates.CarrierPending.body2')}
        <Text style={ [styleDef.bodyCopy, styleDef.bold] }>
        carrier_relations@jbhunt.com
        </Text>
        {strings('PendingUserStates.CarrierPending.body3')}
      </Text>

      <C360Icon
        style={ styleDef.icon }
        name='jbh-Wide_DryVan'
        size={ 230 }
      />

      <View style={ styleDef.footerContainer }>
        <Button
          warning
          block
          style={ styleDef.button }
          onPress={ () => navigation.navigate('Main') }
        >
          <Text style={ [styleDef.buttonText, styleDef.buttonTextBig] }>
            {strings('PendingUserStates.button.continue_to_profile')}
          </Text>
        </Button>
      </View>

    </View>
  </C360LogoContainer>
);
