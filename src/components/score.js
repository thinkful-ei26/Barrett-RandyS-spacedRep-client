import React from 'react';
import {connect} from 'react-redux';

import '../stylesheets/score.css'

export class Score extends React.Component {
  render() {
    return (
      <div className='score'>
        <h2>0 out of 0 for this question</h2>
      </div>
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

export default connect(mapStateToProps)(Score);