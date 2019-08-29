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
      type="btnPrimary"
    />
  ))
  .add("primary outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-primary-outline"
      type="btnPrimaryOutlined"

    />
  ))
  .add("primary-light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      type="btnPrimaryLight"
    />
  ))
  .add("primary with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      type="btnPrimaryGrayShadow"
    />
  ))
  .add("primary with shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      type="btnPrimaryShadow"
    />
  ))
  // secondary Button
  .add("secondary", () => (
    <Button
      onClick={action("click")}
      label="Button"
      type="btnSecondary"
    />
  ))
  .add("secondary outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      type="btnSecondaryOutline"
    />
  ))
  .add("secondary light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      type="btnSecondaryLight"
    />
  ))
  .add("secondary with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      type="btnSecondaryGrayShadow"
    />
  ))
  .add("secondary with shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      type="btnSecondaryShadow"
    />
  ))
  // error Button
  .add("error", () => (
    <Button
      onClick={action("click")}
      label="Button"
      type="btnError"
    />
  ))
  // .add("error outline", () => (
  //   <Button
  //     label="Button"
  //     onClick={action("click")}
  //     className="btn btn-error-outline"
  //   />
  // ))
  // .add("error-light", () => (
  //   <Button
  //     onClick={action("click")}
  //     label="Button"
  //     className="btn btn-error-light"
  //   />
  // ))
  // .add("error with gray shadow", () => (
  //   <Button
  //     label="Button"
  //     onClick={action("click")}
  //     className="btn btn-error-gray-shadow"
  //   />
  // ))
  // .add("error with shadow", () => (
  //   <Button
  //     label="Button"
  //     onClick={action("click")}
  //     className="btn btn-error-shadow"
  //   />
  // ))
  // // devider Button
  // .add("divider", () => (
  //   <Button
  //     onClick={action("click")}
  //     label="Button"
  //     className="btn btn-devider"
  //   />
  // ))
  // .add("devider outline", () => (
  //   <Button
  //     label="Button"
  //     onClick={action("click")}
  //     className="btn btn-devider-outline"
  //   />
  // ))
  // .add("devider-light", () => (
  //   <Button
  //     onClick={action("click")}
  //     label="Button"
  //     className="btn btn-devider-light"
  //   />
  // ))
  // .add("devider with gray shadow", () => (
  //   <Button
  //     label="Button"
  //     onClick={action("click")}
  //     className="btn btn-devider-gray-shadow"
  //   />
  // ))
  // //rounded buttons
  // .add("button rounded corners with 5px", () => (
  //   <Button
  //     onClick={action("click")}
  //     label="Button"
  //     className="btn btn-corner-5px"
  //   />
  // ))
  // .add("button rounded corners with 200px", () => (
  //   <Button
  //     onClick={action("click")}
  //     label="Button"
  //     className="btn btn-corner-200px"
  //   />
  // ))
  // .add("chip", () => (
  //   <Button onClick={action("click")} label="Chip" className="btn btn-chip" />
  // ))
  // //ellipse Button
  // .add("ellipse", () => (
  //   <Button
  //     onClick={action("click")}
  //     label="+"
  //     className="btn btn-primary ellipse"
  //   />
  // ))
  // .add("ellipse outline", () => (
  //   <Button
  //     label="+"
  //     onClick={action("click")}
  //     className="btn btn-primary-outline ellipse"
  //   />
  // ))
  // .add("ellipse-light", () => (
  //   <Button
  //     onClick={action("click")}
  //     label="+"
  //     className="btn btn-primary-light ellipse"
  //   />
  // ))
  // .add("ellipse with gray shadow", () => (
  //   <Button
  //     label="+"
  //     onClick={action("click")}
  //     className="btn btn-primary-gray-shadow ellipse"
  //   />
  // ))
  // .add("ellipse with shadow", () => (
  //   <Button
  //     label="+"
  //     onClick={action("click")}
  //     className="btn btn-primary-shadow ellipse"
  //   />
  // ))
  // //secondary with vector
  // .add("secondary with vector", () => (
  //   <Button
  //     label="+ Button"
  //     onClick={action("click")}
  //     className="btn btn-secondary"
  //   />
  // ))
  // //
