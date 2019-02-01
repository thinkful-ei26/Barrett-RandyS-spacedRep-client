import React from 'react';
import {connect} from 'react-redux';

import '../stylesheets/score.css'

export class Score extends React.Component {

  render() {
    if (!this.props.currentWord) {
      return null
    }

    return (
      <section className='score'>
        <h2>{this.props.currentWord.correct} out of {this.props.currentWord.attempts} for this question</h2>
      </section>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentWord: state.game.currentWord
  }
}

export default connect(mapStateToProps)(Score);