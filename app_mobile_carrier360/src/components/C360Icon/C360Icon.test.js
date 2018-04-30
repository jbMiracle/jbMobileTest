import * as _ from 'lodash';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { StyledC360Icon as Icon } from './C360Icon';

describe('C360Icon Component', () => {
  it('renders a result', () => {
    const rendered = TestRenderer.create(<Icon name='jbh-Hazmat' />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('renders a different result for different name key', () => {
    const optionPerk = TestRenderer.create(<Icon name='jbh-Hazmat' />);
    const optionFindLoads = TestRenderer.create(<Icon name='jbh-User_Group' />);

    expect(optionPerk.toJSON()).not.toEqual(optionFindLoads.toJSON());
  });

  it('responds to color attributes', () => {
    const colorNotSpecified = TestRenderer.create(<Icon name='jbh-User_Group' />);
    const colorSpecified = TestRenderer.create(<Icon
      color='#ff00ff'
      name='jbh-User_Group'
    />);

    const renderedColorPath = 'rendered.props.color';
    const noColorRendered = _.get(colorNotSpecified.toTree(), renderedColorPath);
    const colorRendered = _.get(colorSpecified.toTree(), renderedColorPath);

    expect(noColorRendered).not.toEqual(colorRendered);
  });
});
