import { CLEAR_STATE, GET_RESULT, KEY_PRESSED } from "../actions/actionType";

const initialState = {
  value: ""
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case KEY_PRESSED: {
      return { ...state, value: state.value + action.payload };
    }
    case CLEAR_STATE: {
      return { ...state, value: "" };
    }
    case GET_RESULT: {
      return { ...state, value: action.payload };
    }

    default:
      return state;
  }
}
