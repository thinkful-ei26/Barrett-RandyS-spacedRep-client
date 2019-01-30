import React from 'react';
import {connect} from 'react-redux';
import { fetchWord } from '../actions/index';
import AnswerSubmitForm from './answer-submit-form';


import '../stylesheets/question.css'

export class Question extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWord(this.props.loggedIn.id));
  }

  render() {
    let frenchWord;
    if (this.props.currentWord === null) {
      frenchWord = <p>Loading...</p>
    } else {
      frenchWord = this.props.currentWord.frenchWord
    }

    return (
      <div className='question-section'>
        <div className='french-word'>
          <h2>{frenchWord}</h2>
        </div>
        <div className='english-word'>
          <AnswerSubmitForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.game.showModal,
    currentWord: state.game.currentWord,
    loggedIn: state.auth.currentUser,
  }
}

export default connect(mapStateToProps)(Question);