import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';

export class AnswerSubmit extends React.Component {
  onSubmit(value) {
    console.log(value)
    //psuedo action call
    // return this.props.dispatch(submitAnswer(value))
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
})(AnswerSubmit);