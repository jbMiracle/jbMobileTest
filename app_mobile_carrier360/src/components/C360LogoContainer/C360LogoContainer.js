import React, { PureComponent } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Text, H3, Content } from 'native-base';
import styleDef from './C360LogoContainer.style';
import C360Icon from '../C360Icon/C360Icon';

const logo360 = require('../../assets/images/FullLogo.png');

class C360LogoContainer extends PureComponent {
  render() {
    const {
      showBackButton, backButtonOnPress, headerText, descriptionText,
    } = this.props;
    return (
      <Container style={ styleDef.fillWidth }>
        {renderHeader(showBackButton, backButtonOnPress)}
        <Content style={ [styleDef.blueBackgroundColor, !showBackButton && styleDef.topPadding] }>
          <View style={ [styleDef.containerStyles, styleDef.horizontalPadding] }>
            <Image
              source={ logo360 }
              style={ styleDef.imageStyles }
            />
            { headerText ? <H3 style={ styleDef.headerTextStyles }> { headerText } </H3> : null}
            { descriptionText ? <Text style={ styleDef.descriptionTextStyles }> { descriptionText } </Text> : null}
            { this.props.children}
          </View>
        </Content>
      </Container>
    );
  }
}

function renderHeader(showBackButton, backButtonOnPress) {
  return (showBackButton &&
    <Header noShadow style={ [styleDef.headerStyles] } >
      <C360Icon name='jbh-Chevron_Back' color='white' size={ 20 } onPress={ backButtonOnPress } style={ styleDef.iconStyles } />
    </Header>
  );
}

export default C360LogoContainer;
