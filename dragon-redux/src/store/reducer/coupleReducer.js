const ADD_COUPLE = "couple/ADD_COUPLE";
const DELETE_COUPLE = "couple/DELETE_COUPLE";

const initialState = {
  couples: [],
};

const coupleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUPLE:
      return {
        ...state,
        couples: [...state.couples, action.payload],
      };
    case DELETE_COUPLE:
      return {
        ...state,
        couples: state.couples.filter((couple) => couple.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addCouple = (couple) => ({
  type: ADD_COUPLE,
  payload: couple,
});

export const deleteCouple = (coupleId) => ({
  type: DELETE_COUPLE,
  payload: coupleId,
});

export default coupleReducer;
