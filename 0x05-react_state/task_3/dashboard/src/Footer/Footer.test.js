import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContext, { defaultUser } from '../App/AppContext';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display the "Contact us" link when user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
  });

  it('displays the "Contact us" link when user is logged in', () => {
    const user = { email: 'user@example.com', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});

