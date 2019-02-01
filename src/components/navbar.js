import React from 'react';
import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {toggleModal} from '../actions/game';

import LoginForm from './login-form';
import '../stylesheets/navbar.css'

export class Navbar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  onClick() {
    this.props.dispatch(toggleModal())
  }

  render() {
    //if logged in show logout button, if not show login form
    let log;
      if (this.props.loggedIn !== null) {
        log = (
          <button id='logout-btn' onClick={() => this.logOut()}>Log out</button>
        );
      } else {
        log = <LoginForm />
      }

    let leftNav;
    //if logged in show welcome message, if not show infomodal
    if (this.props.loggedIn !== null) {   
      leftNav = (
        <p>Welcome back, {this.props.loggedIn.username}!</p>
      );
    } else {
      leftNav = (
        <button id='info-btn' onClick={() => this.onClick()}>What is LearnFrench?</button>
      );
    }

    return (
      <nav className='navbar'>
        <ul>
          <li>{leftNav}</li>
          <li>{log}</li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.game.showModal,
    loggedIn: state.auth.currentUser,
    // username: state.auth.currentUser.username,
  }
}

export default connect(mapStateToProps)(Navbar);