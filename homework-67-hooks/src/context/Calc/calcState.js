import React, { useReducer } from "react";
import { CalcContext } from "./calcContext";
import { calcReducer } from "./calcReducer";
import { CALC_VALUE, CLEAR_VALUE, GET_RESULT } from "../types";

export const CalcState = ({ children }) => {
  const initialState = {
    value: ""
  };

  const [state, dispatch] = useReducer(calcReducer, initialState);

  const inputValue = value => {
    if (value === "C") {
      return dispatch({
        type: CLEAR_VALUE
      });
    }

    if (value === "=") {
      return dispatch({
        type: GET_RESULT
      });
    }

    return dispatch({
      type: CALC_VALUE,
      payload: state.value + value
    });
  };

  const { value } = state;

  return (
    <div>
      <CalcContext.Provider value={{ value, inputValue }}>
        {children}
      </CalcContext.Provider>
    </div>
  );
};
