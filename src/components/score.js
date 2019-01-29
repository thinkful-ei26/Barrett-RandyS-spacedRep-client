import React from 'react';
import {connect} from 'react-redux';

import '../stylesheets/score.css'

export class Score extends React.Component {

  render() {
    if (!this.props.currentWord) {
      return null
    }
    
    return (
      <div className='score'>
        <h2>{this.props.currentWord.score.correct} out of {this.props.currentWord.score.attempts} for this question</h2>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentWord: state.game.currentWord
  }
}

export default connect(mapStateToProps)(Score);