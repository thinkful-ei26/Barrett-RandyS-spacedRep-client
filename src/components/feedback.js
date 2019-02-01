import React from 'react';
import {connect} from 'react-redux';

import '../stylesheets/feedback.css'
import { fetchWord } from '../actions';

export class Feedback extends React.Component {
  onClick() {
    //dispatch for fetchNextWord
    this.props.dispatch(fetchWord(this.props.loggedIn.id));
  }

  render() {
    let message;
    let nextBtn;

    if (!this.props.userAnswer) {
      message = ''
    } else if (this.props.userAnswer.englishWord === this.props.currentWord.englishWord){
      message = <p>Nice job! '{this.props.currentWord.englishWord}' is the right answer!</p>;
      nextBtn = <button id='next-question-btn' onClick={() => this.onClick()}>Next</button>
    } else {
      message = <p>Oops! The correct answer was '{this.props.currentWord.englishWord}''.</p>;
      nextBtn = <button id='next-question-btn' onClick={() => this.onClick()}>Next</button>
    }

    return (
      <article className='feedback-section'>
        {message}
        {nextBtn}
      </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentWord: state.game.currentWord,
    userAnswer: state.game.userAnswer,
    loggedIn: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Feedback);