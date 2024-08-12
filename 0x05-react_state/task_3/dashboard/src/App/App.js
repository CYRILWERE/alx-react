import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import AppContext, { defaultUser } from './AppContext';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: defaultUser,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user: defaultUser });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    });
  }

  render() {
    const { user, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className="App">
          <Notifications
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

