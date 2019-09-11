import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../components/Card";
import CardDocumentation from "../Documentation/Card";

const body =
  "Your first tutorial! This basic HTML and CSS tutorial will help you understand how web pages look they way they do. Have fun!";
storiesOf("Card", module)
  .add("documentation", () => <CardDocumentation />)
  .add("simple card", () => (
    <Card
      className="card"
      title="Sololearn: HTML, CSS and JS"
      body={body}
      buttonsContainerClass="buttonsContainerClass"
      btnBodyHeaderContainer="btnBodyHeaderContainer"
      divider={false}
    />
  ))
  .add("card with divider", () => (
    <Card
      className="card"
      title="Sololearn: HTML, CSS and JS"
      body={body}
      buttonsContainerClass="buttonsContainerClass"
      btnBodyHeaderContainer="btnBodyHeaderContainer"
      divider={true}
    />
  ));
