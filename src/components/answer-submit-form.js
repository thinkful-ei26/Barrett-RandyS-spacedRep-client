import React from 'react';
import {Field, reduxForm, focus, resetForm} from 'redux-form';
import Input from './input';
import {saveUserAnswer} from '../actions/game';

export class AnswerSubmitForm extends React.Component {
  onSubmit(value) {
    //FIGURE OUT HOW TO CLEAR INPUT FORM
    return this.props.dispatch(saveUserAnswer(value))
    .then(() => this.props.resetForm());
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

      <button disabled={this.props.pristine || this.props.submitting}>
        Submit
      </button>
    </form>
    )
  }
}

export default reduxForm({
  form: 'submit-answer-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('submit-answer-form'))
})(AnswerSubmitForm);

//1. check if answer is correct
//2. dispatch updateWordAction depending on correct answer
//3. fetchNewWord
//4. Display new word score data