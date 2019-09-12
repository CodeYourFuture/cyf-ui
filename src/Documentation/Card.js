import React from "react";
import Card from "../components/Card";
import "./button.css";

const body =
  "Your first tutorial! This basic HTML and CSS tutorial will help you understand how web pages look they way they do. Have fun!";
const CardDocumentation = () => {
  return (
    <div className="general">
      <div>
        <h1>Card</h1>
        <h3>Import</h3>
        <pre>{`import { Card } from '@codeyourfuture/cyf-ui';`}</pre>
      </div>
      <div className="component">
        <Card
          className="card"
          title="Sololearn: HTML, CSS and JS"
          body={body}
          buttonsContainerClass="buttonsContainerClass"
          btnBodyHeaderContainer="btnBodyHeaderContainer"
          divider={false}
        />
      </div>
      <div>
        <div>
          <h3>Usage</h3>
          <p>Simple card</p>
          <pre>{`
    <Card
      className="card"
      title="Sololearn: HTML, CSS and JS"
      body={body}
      buttonsContainerClass="buttonsContainerClass"
      btnBodyHeaderContainer="btnBodyHeaderContainer"
      divider={false}
    />
`}</pre>
          <p>With divider</p>
          <pre>{`
    <Card
      className="card"
      title="Sololearn: HTML, CSS and JS"
      body={body}
      buttonsContainerClass="buttonsContainerClass"
      btnBodyHeaderContainer="btnBodyHeaderContainer"
      divider={true}
    />          
          `}</pre>
          <h3>Properties</h3>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>card title</td>
              </tr>
              <tr>
                <td>body</td>
                <td>string</td>
                <td>card text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardDocumentation;
