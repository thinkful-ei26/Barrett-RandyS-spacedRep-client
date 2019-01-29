import React from 'react';
import {connect} from 'react-redux';
import AnswerSubmit from './answer-submit';


import '../stylesheets/question.css'

export class Question extends React.Component {

  render() {
    return (
      <div className='question-section'>
        <div className='french-word'>
          <h2>Bonjour</h2>
        </div>
        <div className='english-word'>
          <AnswerSubmit />
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    showModal: state.game.showModal,
    loggedIn: state.auth.currentUser,
  }
}

export default connect(mapStateToProps)(Question);