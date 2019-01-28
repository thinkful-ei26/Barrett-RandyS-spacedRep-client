import React from 'react';
import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import LoginForm from './login-form';
import { InfoModal } from './info-modal';
import '../stylesheets/navbar.css'

export class Navbar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let log;
      if (this.props.loggedIn) {
        log = (
          <button onClick={() => this.logOut()}>Log out</button>
        );
      } else {
        log = <LoginForm />
      }


    return (
      <nav className='navbar'>
        <ul>
          <li><InfoModal /></li>
          <li>{log}</li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    showModal: state
  }
}