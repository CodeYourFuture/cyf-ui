import React, { useState } from "react";
import { CircleWithNum } from "..";

export default {
  title: "Components/CircleWithNo",
  component: CircleWithNum,
};

export const CircleNo = () => {
  const [num, setNum] = useState(0);
  return (
    <CircleWithNum
      data-testid="clc"
      num={num}
      onClick={() => setNum(num + 1)}
    />
  );
};
