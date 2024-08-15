import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('verifies that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('verifies that after changing the value of the two inputs, the submit button is enabled', () => {
    const wrapper = shallow(<Login />);
    
    wrapper.find('input#email').simulate('change', { target: { value: 'user@example.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password123' } });
    
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});

