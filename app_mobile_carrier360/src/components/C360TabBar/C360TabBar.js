import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row, connectStyle } from 'native-base';
import { SafeAreaView, View, Platform } from 'react-native';
import { styleDef } from './C360TabBar.style';

class C360TabBar extends PureComponent {
  render() {
    const { navigation, renderIcon, style } = this.props;
    const { routes } = navigation.state;

    if (Platform.OS === 'ios') {
      return (
        <SafeAreaView style={ [style.safeView, style.safeViewIos] }>
          <View style={ style.outerContainer }>
            <View>
              <View style={ style.bar }>
                <View style={ style.mainButtonHump } />
              </View>
              <View style={ style.topBar } />
            </View>
            <Grid style={ style.contents }>
              <Row>
                { renderTabs({ navigation, renderIcon, style }, routes) }
              </Row>
            </Grid>
          </View>
        </SafeAreaView>
      );
    }

    return (
      <View style={ style.safeView }>
        <View style={ style.bar } />
        <View style={ style.mainButtonHumpAndroid } />
        <View style={ style.topAndroidBar } />
        <Grid style={ style.contents }>
          <Row>
            { renderTabs(this.props, routes) }
          </Row>
        </Grid>
      </View>
    );
  }
}

function renderTabs({ navigation, renderIcon, style }, allRoutes) {
  return allRoutes.map((route, index) => {
    const focused = index === navigation.state.index;
    const scene = { route, index, focused };
    const columnStyle = (Platform.OS === 'ios') ? null : style.col;

    return (
      <Col key={ route.key } style={ columnStyle }>
        { renderIcon(scene) }
      </Col>
    );
  });
}

C360TabBar.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  renderIcon: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default connectStyle('C360.TabBar', styleDef)(C360TabBar);
