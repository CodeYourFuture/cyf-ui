import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "./buttonStories.css";
import Button from "../components/Button";

storiesOf("Button", module)
  // primary Button
  .add("primary", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnPrimary"
    />
  ))
  .add("primary outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-primary-outline"
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
  // secondary Button
  .add("secondary", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnSecondary"
    />
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
  // error Button
  .add("error", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnError"
    />
  ))
  .add("error outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnErrorOutline"
    />
  ))
  .add("error-light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnErrorLight"
    />
  ))
  .add("error with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnErrorGrayShadow"
    />
  ))
  .add("error with shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      variant="btnErrorShadow"
    />
  ))
  // divider Button
  .add("divider", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnDivider"
    />
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
  // //rounded buttons
  .add("button rounded corners with 5px", () => (
    <Button
      onClick={action("click")}
      label="Button"
      variant="btnCorner_5px"
    />
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
  //ellipse Button
  .add("ellipse", () => (
    <Button
      onClick={action("click")}
      label="+"
      variant="btnPrimaryEllipse"
    />
  ))
  .add("ellipse outline", () => (
    <Button
      label="+"
      onClick={action("click")}
      variant="btnPrimaryOutlineEllipse"
    />
   ))
  // .add("ellipse-light", () => (
  //   <Button
  //     onClick={action("click")}
  //     label="+"
  //     variant="btn btn-primary-light ellipse"
  //   />
  // ))
  // .add("ellipse with gray shadow", () => (
  //   <Button
  //     label="+"
  //     onClick={action("click")}
  //     variant="btn btn-primary-gray-shadow ellipse"
  //   />
  // ))
  // .add("ellipse with shadow", () => (
  //   <Button
  //     label="+"
  //     onClick={action("click")}
  //     variant="btn btn-primary-shadow ellipse"
  //   />
  // ))
  // //secondary with vector
  // .add("secondary with vector", () => (
  //   <Button
  //     label="+ Button"
  //     onClick={action("click")}
  //     variant="btn btn-secondary"
  //   />
  // ))
  // //
