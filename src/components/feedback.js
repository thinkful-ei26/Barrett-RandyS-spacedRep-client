import React from 'react';
import {connect} from 'react-redux';

import '../stylesheets/feedback.css'

export class Feedback extends React.Component {
  onClick() {
    //dispatch for fetchNextWord
  }

  render() {
    let message = <p>'Oops! The correct answer was $currentWord.englishWord.'</p>;
    //psuedo code
    // if (this.props.userAnswer === this.props.currentWord.englishWord) {
    //   message = <p>Nice job! {this.props.currentWord.englishWord} is the right answer!'</p>;
    // } else {
    //   message = <p>'Oops! The correct answer was {currentWord.englishWord}.'</p>;
    // }

    return (
      <div className='feedback-section'>
        {message}
        <button id='next-question-btn'>Next</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // correctAnswer: state.game.showModal,
    //userAnswer: state.game.userAnswer
  }
}

export default connect(mapStateToProps)(Feedback);