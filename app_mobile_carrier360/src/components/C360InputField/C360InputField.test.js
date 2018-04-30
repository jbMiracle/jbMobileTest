import React from 'react';
import TestRenderer from 'react-test-renderer';
import { C360InputField } from './C360InputField';

jest.useFakeTimers();

describe('Can render Input Field', () => {
  it('render without icon', () => {
    const props = {
      id: 'inputField',
      placeHolderText: 'Username',
      value: null,
      leftIconName: null,
      error: false,
      dark: false,
    };
    const rendered = TestRenderer.create(<C360InputField { ...props } />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('render with icon', () => {
    const props = {
      id: 'inputField',
      placeHolderText: 'Username',
      value: null,
      leftIconName: 'jbh-User_Profile',
      error: false,
      dark: false,
    };
    const rendered = TestRenderer.create(<C360InputField { ...props } />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('render with value and icon', () => {
    const props = {
      id: 'inputField',
      placeHolderText: 'Username',
      value: 'Demo',
      leftIconName: 'jbh-User_Profile',
      error: false,
      dark: false,
    };
    const rendered = TestRenderer.create(<C360InputField { ...props } />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('render dark theme', () => {
    const props = {
      id: 'inputField',
      placeHolderText: 'Username',
      value: 'Demo',
      leftIconName: 'jbh-User_Profile',
      error: false,
      dark: true,
    };
    const rendered = TestRenderer.create(<C360InputField { ...props } />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('render with error', () => {
    const props = {
      id: 'inputField',
      placeHolderText: 'Username',
      value: 'Demo',
      leftIconName: 'jbh-User_Profile',
      error: true,
      dark: false,
    };
    const rendered = TestRenderer.create(<C360InputField { ...props } />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
