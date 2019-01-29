'use strict';
import { TOGGLE_MODAL } from '../actions/game';

import { FETCH_WORD_REQUEST,
  FETCH_WORD_SUCCESS,
  FETCH_WORD_ERROR,
  SAVE_USER_ANSWER,
  fetchWord } from '../actions/index';

const initialState = {
  showModal: false,
  currentWord: null,  
  loading: false,
  error: null,
  userAnswer: null,
};

const gameReducer = (state=initialState, action) => {
  if (action.type === TOGGLE_MODAL) {
    return Object.assign({}, state, {
      showModal: !state.showModal
    })
  }

  if (action.type === FETCH_WORD_REQUEST) {
    console.log('request dispatched');
    return Object.assign({}, state, {
      userAnswer: null,
      loading: true
    })
  } else if (action.type === FETCH_WORD_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentWord: action.word,
      error: null,
      userAnswer: null,
    })
  } else if (action.type === FETCH_WORD_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      userAnswer: null,
      error: action.error
    })
  } else if (action.type === SAVE_USER_ANSWER) {
    console.log('action dispatched', action.word)
    return Object.assign({}, state, {
      userAnswer: action.word
    })
  }

  return state
}

export default gameReducer