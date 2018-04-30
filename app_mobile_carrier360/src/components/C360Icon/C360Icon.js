import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { connectStyle, IconNB, mapPropsToStyleNames } from 'native-base';
import icoMoonConfig from '../../assets/fonts/C360Icons/selection.json';

const names = map(icoMoonConfig.icons, 'properties.name');
const C360IconSet = createIconSetFromIcoMoon(icoMoonConfig);

C360IconSet.propTypes = {
  style: IconNB.propTypes.style,
  name: PropTypes.oneOf(names),
};

class C360IconNB extends IconNB {
  setIcon() {
    this.Icon = C360IconSet;
  }

  /**
   * Overwrite the render method of IconNB to provide acccurate proptype warnings
   *
   * @return {*}
   */
  render() {
    return (<C360IconSet
      ref={c => (this._root = c)} // eslint-disable-line
      { ...this.props }
    />);
  }
}

C360IconNB.propTypes = {
  style: IconNB.propTypes.style,
  name: PropTypes.oneOf(names),
};

export const StyledC360Icon = connectStyle(
  'NativeBase.IconNB',
  {},
  mapPropsToStyleNames
)(C360IconNB);

export default C360IconSet;
