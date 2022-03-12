import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {

  const [state, setState] = useState(false);

  function toggleMenuState(menuState) {
    if (state[menuState]) {
      setState({ [menuState]: false });
    } else if (Object.keys(state).length === 0) {
      setState({ [menuState]: true });
    } else {
      Object.keys(state).forEach(i => {
        setState({ [i]: false });
      });
      setState({ [menuState]: true });
    }
  }

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="!#" className="nav-link">
            <div className="nav-profile-image">
              <img src={require("../../assets/images/faces/face1.jpg")} alt="profile" />
              <span className="login-status online"></span> {/* change to offline or busy as needed */}
            </div>
            <div className="nav-profile-text">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        <li className="nav-item">
          <div className={state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => toggleMenuState('basicUiMenuOpen')} data-toggle="collapse">
            <span className="menu-title">Users</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
          </div>
          <Collapse in={state.basicUiMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" to="/users">All Users</Link></li>
            </ul>
          </Collapse>
        </li>
      </ul>
    </nav>
  );

}

export default Sidebar;