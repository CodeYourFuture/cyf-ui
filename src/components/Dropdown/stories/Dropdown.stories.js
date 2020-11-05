import React from "react";
import { Dropdown, DropdownPanel } from "../index";

export default {
  title: "Dropdown",
};

const Panel = () => {
  return <DropdownPanel>This is some text</DropdownPanel>;
};

export const DropdownWithCustomPanel = () => {
  return (
    <div>
      <Dropdown panel={Panel} />
    </div>
  );
};
