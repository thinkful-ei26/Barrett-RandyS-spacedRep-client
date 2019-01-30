import React from 'react';
import {connect} from 'react-redux';

import '../stylesheets/feedback.css'
import { fetchWord } from '../actions';

export class Feedback extends React.Component {
  onClick() {
    //dispatch for fetchNextWord
    console.log('button clicked')
    this.props.dispatch(fetchWord(this.props.loggedIn.id));
  }

  render() {
    console.log(this.props.userAnswer)
    let message;

    if (!this.props.userAnswer) {
      message = ''
    } else if (this.props.userAnswer.englishWord === this.props.currentWord.englishWord){
      message = <p>Nice job! {this.props.currentWord.englishWord} is the right answer!'</p>;
    } else {
      console.log('user answer', this.props.userAnswer.englishWord)
      console.log('current word', this.props.currentWord.englishWord)
      message = <p>'Oops! The correct answer was {this.props.currentWord.englishWord}.'</p>;
    }

    return (
      <div className='feedback-section'>
        {message}
        <button id='next-question-btn' onClick={() => this.onClick()}>Next</button>
      </div>
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