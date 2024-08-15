import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AppContext, { defaultUser } from './AppContext';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('updates state correctly when logIn is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('user@example.com', 'password123');
    expect(wrapper.state('user')).toEqual({
      email: 'user@example.com',
      password: 'password123',
      isLoggedIn: true,
    });
  });

  it('updates state correctly when logOut is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('user@example.com', 'password123');
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual(defaultUser);
  });

  it('removes the notification when markNotificationAsRead is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
    });
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state('listNotifications')).toEqual([
      { id: 2, type: 'urgent', value: 'New resume available' },
    ]);
  });
});

