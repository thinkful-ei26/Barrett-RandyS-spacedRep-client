import React from 'react';
import {connect} from 'react-redux';

export class InfoModal extends React.Component {
  render() {
    return (
      <div className='info-modal'>
        <p>What's LearnFrench?</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    infoStatus: state
  }
}