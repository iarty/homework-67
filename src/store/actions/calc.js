import { CLEAR_STATE, GET_RESULT, KEY_PRESSED } from "./actionType";
import { store } from "../store";

export const keyPressed = param => {
  if (param === "C") {
    return {
      type: CLEAR_STATE
    };
  }

  if (param === "=") {
    return {
      type: GET_RESULT,
      // eslint-disable-next-line no-eval
      payload: eval(store.getState().value)
    };
  }

  return {
    type: KEY_PRESSED,
    payload: param
  };
};
