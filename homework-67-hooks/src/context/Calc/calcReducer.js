import { CALC_VALUE, CLEAR_VALUE, GET_RESULT } from "../types";

const handlers = {
  [CALC_VALUE]: (state, { payload }) => ({
    ...state,
    value: payload
  }),
  [CLEAR_VALUE]: state => ({
    ...state,
    value: ""
  }),
  [GET_RESULT]: state => ({
    ...state,
    // eslint-disable-next-line no-eval
    value: eval(state.value)
  }),
  DEFAULT: state => state
};

export const calcReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
