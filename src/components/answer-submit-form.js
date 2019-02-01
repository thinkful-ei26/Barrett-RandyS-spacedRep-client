import React from 'react';
import {Field, reduxForm, focus, reset} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';
import {saveUserAnswer} from '../actions/game';
import {updateWord} from '../actions/async'

export class AnswerSubmitForm extends React.Component {
  onSubmit(value) {
    //FIGURE OUT HOW TO CLEAR INPUT FORM
    this.props.dispatch(saveUserAnswer(value))
    this.props.dispatch(reset('submit-answer-form'));
    return this.props.dispatch(updateWord(this.props.loggedIn.id, value))
    // .then((res) => console.log('reset form'));
  }

  render() {

    return (
      <form 
      className='submit-answer-form'
      onSubmit={this.props.handleSubmit(value => 
        this.onSubmit(value))}>
      <label htmlFor='english-answer'></label>
      <Field 
        component={Input}
        type="text"
        name="englishWord"
        id="englishWord"
      />

      <button id='answer-submit-btn' disabled={this.props.pristine || this.props.submitting}>
        Submit
      </button>
    </form>
    )
  }
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser
	}
}

AnswerSubmitForm = connect(mapStateToProps)(AnswerSubmitForm);

export default reduxForm({
  form: 'submit-answer-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('submit-answer-form')),
})(AnswerSubmitForm);

//1. check if answer is correct
//2. dispatch updateWordAction depending on correct answer
//3. fetchNewWord
//4. Display new word score data