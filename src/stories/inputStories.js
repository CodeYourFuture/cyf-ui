import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "../components/Input";
import InputDocumentation from "../Documentation/Input";

storiesOf("Input", module)
  .add("documentation", () => <InputDocumentation />)
  .add("inactive input", () => (
    <Input onClick={action("onChange")} variant="inactiveInput" />
  ))
  .add("focused input", () => (
    <Input onChange={action("change")} variant="focusedInput" />
  ))
  .add("active input", () => (
    <Input onChange={action("change")} variant="activeInput" />
  ))
  .add("error input", () => (
    <Input onChange={action("change")} variant="errorInput" />
  ));
