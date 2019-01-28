'use strict';
import { TOGGLE_MODAL } from '../actions/game'

const initialState = {
  showModal: false
};

const gameReducer = (state=initialState, action) => {
  if (action.type === TOGGLE_MODAL) {
    return Object.assign({}, state, {
      showModal: !state.showModal
    })
  }
  return state
}

export default gameReducer