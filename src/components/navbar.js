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
    console.log('clicked')
    this.props.dispatch(toggleModal())
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
          <li><button onClick={() => this.onClick()}>What is LearnFrench?</button></li>
          <li>{log}</li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.game.showModal
  }
}

export default connect(mapStateToProps)(Navbar);