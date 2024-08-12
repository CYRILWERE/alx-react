import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      displayDrawer: false
    };

    // Bind the functions
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  // Function to show the drawer
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  // Function to hide the drawer
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    return (
      <div className="App">
        <Notifications 
          displayDrawer={this.state.displayDrawer} 
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        {/* Other components */}
      </div>
    );
  }
}

export default App;

