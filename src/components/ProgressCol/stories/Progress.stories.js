import React, { useReducer } from "react";
import { ProgressCheck } from "..";

export default {
  title: "Components/Progress",
  component: ProgressCheck,
};

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export const ProgressTick = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return <ProgressCheck count={count} onClick={() => dispatch("INCREMENT")} />;
};
