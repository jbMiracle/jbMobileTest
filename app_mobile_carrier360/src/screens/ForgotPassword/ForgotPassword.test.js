import React from 'react';
import { shallow } from 'enzyme';
import { ForgotPasswordScreen } from './ForgotPassword';

const mockProps = {
  navigation: {
    pop: () => {},
  },
  sendPasswordReset: () => {},
};

describe('ForgotPassword Screen', () => {
  it('can render initially with a disabled button', () => {
    const wrapper = shallow(<ForgotPasswordScreen { ...mockProps } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('can render with a disabled button when it has an email', () => {
    const wrapper = shallow(<ForgotPasswordScreen { ...mockProps } />);
    wrapper.setState({
      hasValidEmail: true,
      emailAddress: 'test@test.com',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
