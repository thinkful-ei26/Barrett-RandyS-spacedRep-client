'use strict';
import { TOGGLE_MODAL } from '../actions/game';

import { FETCH_WORD_REQUEST,
  FETCH_WORD_SUCCESS,
  FETCH_WORD_ERROR,
  fetchWord } from '../actions/index';

const initialState = {
  showModal: false,
  currentWord: null,
  loading: false,
  error: null
};

const gameReducer = (state=initialState, action) => {
  if (action.type === TOGGLE_MODAL) {
    return Object.assign({}, state, {
      showModal: !state.showModal
    })
  }

  if (action.type === FETCH_WORD_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_WORD_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentWord: action.word,
      error: null
    })
  } else if (action.type === FETCH_WORD_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } 

  return state
}

export default gameReducer