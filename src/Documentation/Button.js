import React from "react";
import Button from "../components/Button";
import { action } from "@storybook/addon-actions";
import "./button.css";

const ButtonDocumentation = () => {
  return (
    <div className="general">
      <div>
        <h1>Button</h1>
        <h3>Import</h3>
        <pre>{`import { Button } from '@codeyourfuture/cyf-ui';`}</pre>
      </div>
      <div className="component">
        <Button onClick={action("click")} label="Button" variant="btnPrimary" />
      </div>
      <div>
        <div>
          <h3>Usage</h3>
          <p>Simple</p>
          <pre>{`<Button label="Button" onClick={handleClick} variant="btnPrimary" />`}</pre>
          <p>With outline</p>
          <pre>{`<Button label="Button" onClick={handleClick} variant="btnPrimaryOutlined" />`}</pre>
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
                <td>button type</td>
              </tr>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>button text</td>
              </tr>
            </tbody>
          </table>
          <h3>Variant List : </h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>default</th>
                <th>outline</th>
                <th>light</th>
                <th>gray shadow</th>
                <th>shadow</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>primary</th>
                <td>btnPrimary</td>
                <td>btnPrimaryOutlined</td>
                <td>btnPrimaryLight</td>
                <td>btnPrimaryGrayShadow</td>
                <td>btnPrimaryShadow</td>
              </tr>
              <tr>
                <th>secondary</th>
                <td>btnSecondary</td>
                <td>btnSecondaryOutline</td>
                <td>btnSecondaryLight</td>
                <td>btnSecondaryGrayShadow</td>
                <td>btnSecondaryShadow</td>
              </tr>
              <tr>
                <th>error</th>
                <td>btnError</td>
                <td>btnErrorOutline</td>
                <td>btnErrorLight</td>
                <td>btnErrorGrayShadow</td>
                <td>btnErrorShadow</td>
              </tr>
              <tr>
                <th>divider</th>
                <td>btnDivider</td>
                <td>btnDividerOutline</td>
                <td>btnDividerLight</td>
                <td>btnDividerGrayShadow</td>
                <td>---</td>
              </tr>
              <tr>
                <th>ellipse</th>
                <td>btnPrimaryEllipse</td>
                <td>btnPrimaryOutlineEllipse</td>
                <td>btnPrimaryLightEllipse</td>
                <td>btnPrimaryGrayShadowEllipse</td>
                <td>btnPrimaryShadowEllipse</td>
              </tr>
              <tr>
                <th>rounded</th>
                <td>btnCorner_5px</td>
                <td>btnCorner_200px</td>
              </tr>
              <tr>
                <th>chip</th>
                <td>btnChip</td>
              </tr>
              <tr>
                <th>with vector</th>
                <td>btnSecondaryVector</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ButtonDocumentation;
