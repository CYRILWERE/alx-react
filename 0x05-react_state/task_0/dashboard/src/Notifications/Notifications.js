import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.displayDrawer !== this.props.displayDrawer;
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <div className="Notifications">
        <div onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className="NotificationsPanel">
            <button onClick={handleHideDrawer}>Close</button>
            <p>Here is the list of notifications</p>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;

