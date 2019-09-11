import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";
import ButtonDocumentation from "../Documentation/Button";

storiesOf("Button", module)
  .add("documentation", () => <ButtonDocumentation />)
  .add("primary", () => (
    <Button label="Button" onClick={action("click")} variant="btnPrimary" />
  ))
  .add("primary outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnPrimaryOutlined"
    />
  ))
  .add("primary-light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnPrimaryLight"
    />
  ))
  .add("primary with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnPrimaryGrayShadow"
    />
  ))
  .add("primary with shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnPrimaryShadow"
    />
  ))
  .add("secondary", () => (
    <Button onClick={action("click")} label="Button" variant="btnSecondary" />
  ))
  .add("secondary outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnSecondaryOutline"
    />
  ))
  .add("secondary light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnSecondaryLight"
    />
  ))
  .add("secondary with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnSecondaryGrayShadow"
    />
  ))
  .add("secondary with shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnSecondaryShadow"
    />
  ))
  .add("error", () => (
    <Button onClick={action("click")} label="Button" variant="btnError" />
  ))
  .add("error outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnErrorOutline"
    />
  ))
  .add("error-light", () => (
    <Button onClick={action("click")} label="Button" variant="btnErrorLight" />
  ))
  .add("error with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnErrorGrayShadow"
    />
  ))
  .add("error with shadow", () => (
    <Button label="Button" onClick={action("click")} variant="btnErrorShadow" />
  ))
  .add("divider", () => (
    <Button onClick={action("click")} label="Button" variant="btnDivider" />
  ))
  .add("divider outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnDividerOutline"
    />
  ))
  .add("divider-light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnDividerLight"
    />
  ))
  .add("divider with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnDividerGrayShadow"
    />
  ))
  .add("ellipse", () => (
    <Button onClick={action("click")} label="+" variant="btnPrimaryEllipse" />
  ))
  .add("ellipse outline", () => (
    <Button
      label="+"
      onClick={action("click")}
      variant="btnPrimaryOutlineEllipse"
    />
  ))
  .add("ellipse-light", () => (
    <Button
      onClick={action("click")}
      label="+"
      variant="btnPrimaryLightEllipse"
    />
  ))
  .add("ellipse with gray shadow", () => (
    <Button
      label="+"
      onClick={action("click")}
      variant="btnPrimaryGrayShadowEllipse"
    />
  ))
  .add("ellipse with shadow", () => (
    <Button
      label="+"
      onClick={action("click")}
      variant="btnPrimaryShadowEllipse"
    />
  ))
  .add("button rounded corners with 5px", () => (
    <Button onClick={action("click")} label="Button" variant="btnCorner_5px" />
  ))
  .add("button rounded corners with 200px", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnCorner_200px"
    />
  ))
  .add("chip", () => (
    <Button onClick={action("click")} label="Chip" variant="btnChip" />
  ))
  .add("secondary with vector", () => (
    <Button
      label="+ Button"
      onClick={action("click")}
      variant="btnSecondaryVector"
    />
  ));
