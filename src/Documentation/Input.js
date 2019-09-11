import React from "react";
import { action } from "@storybook/addon-actions";
import Input from "../components/Input";
import "./button.css";

const InputDocumentation = () => {
  return (
    <div className="general">
      <div>
        <h1>Input</h1>
        <h3>Import</h3>
        <pre>{`import { Input } from '@codeyourfuture/cyf-ui';`}</pre>
      </div>
      <div className="component">
        <Input onClick={action("onChange")} variant="activeInput" />
      </div>
      <div>
        <div>
          <h3>Usage</h3>
          <p>Simple</p>
          <pre>{`<Input onChange={handleChange} variant="inactiveInput" />`}</pre>
          <p>focused input</p>
          <pre>{`<Input onChange={handleChange} variant="focusedInput" />`}</pre>
          <p>active input</p>
          <pre>{`<Input onChange={handleChange} variant="activeInput" />`}</pre>
          <p>error input</p>
          <pre>{`<Input onChange={handleChange} variant="errorInput" />`}</pre>
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
                <td>variant</td>
                <td>string</td>
                <td>input type</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InputDocumentation;
