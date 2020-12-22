import React, { useState } from "react";

import { Checkbox } from "..";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

export const Default = () => {
  const [checkValue, setCheckValue] = useState(false);
  return (
    <Checkbox
      label="include VAT"
      checked={checkValue}
      onChange={(value) => setCheckValue(value)}
    />
  );
};
