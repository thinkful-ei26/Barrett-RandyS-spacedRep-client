export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
    type: TOGGLE_MODAL
});

export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const saveUserAnswer = (word) => ({
    type: SAVE_USER_ANSWER,
    word
});