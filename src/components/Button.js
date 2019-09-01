import React from "react";
import styled from "styled-components";

//Here starts our specific button styles:

/* primary buttons styling */
const btnPrimary = {
  name: "btnPrimary",
  color: "#ffffff",
  background: "#2196f3",
};

const btnPrimaryOutlined = {
  name: "btnPrimaryOutlined",
  color: "#2196f3",
  background: "#ffffff",
  border: "2px solid #03a9f4",
};

const btnPrimaryLight = {
  name: "btnPrimaryLight",
  color: "#2196f3",
  background: "#b3e5fc",
};

const btnPrimaryGrayShadow = {
  name: "btnPrimaryGrayShadow",
  color: "#2196f3",
  background: "#ffffff",
  boxShadow:
    "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
};
const btnPrimaryShadow = {
  name: "btnPrimaryShadow",
  color: "#2196f3",
  background: "#ffffff",
  boxShadow: "0px 2px 4px #03A9F4",
};

/* secondary buttons styling */
const btnSecondary = {
  name: "btnSecondary",
  color: "#ffffff",
  background: "#4CAF50",
};
const btnSecondaryOutline = {
  name: "btnSecondaryOutline",
  color: "#4CAF50",
  background: "#ffffff",
  border: "2px solid #4CAF50",
};
const btnSecondaryLight = {
  name: "btnSecondaryLight",
  color: "#388E3C",
  background: "#81C784",
  opacity: "0.8",
};
const btnSecondaryGrayShadow = {
  name: "btnSecondaryGrayShadow",
  color: "#388E3C",
  background: "#ffffff",
  boxShadow:
    "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),0px 2px 4px rgba(0, 0, 0, 0.14)",
};
const btnSecondaryShadow = {
  name: "btnSecondaryShadow",
  color: "#388E3C",
  background: "#ffffff",
  boxShadow: "0px 2px 4px #4CAF50",
};

/* error buttons styling */
const btnError = {
  name: "btnError",
  color: "#ffffff",
  background: "#f44336",
};
const btnErrorOutline = {
  name: "btnErrorOutline",
  color: "#f44336",
  background: "#ffffff",
  border: "2px solid #f44336",
};
const btnErrorLight = {
  name: "btnErrorLight",
  color: "#f44336",
  background: "#FFCDD2",
  opacity: "0.8",
};
const btnErrorGrayShadow = {
  name: "btnErrorGrayShadow",
  color: "#f44336",
  background: "#ffffff",
  boxShadow:
    "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),0px 2px 4px rgba(0, 0, 0, 0.14)",
};
const btnErrorShadow = {
  name: "btnErrorShadow",
  color: "#f44336",
  background: "#ffffff",
  boxShadow: "0px 2px 4px #F44336",
};

const btnDivider = {
  name: "btnDivider",
  color: "#ffffff",
  background: "#BDBDBD",
};
const btnDividerOutline = {
  name: "btnDividerOutline",
  color: "#9E9E9E",
  background: "#ffffff",
  border: "2px solid #BDBDBD",
};
const btnDividerLight = {
  name: "btnDividerLight",
  color: "#757575",
  background: "#EEEEEE",
  opacity: 0.8,
};
const btnDividerGrayShadow = {
  name: "btnDividerGrayShadow",
  color: "#9E9E9E",
  background: "#ffffff",
  boxShadow:
    "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),0px 2px 4px rgba(0, 0, 0, 0.14)",
};
const btnCorner_5px = {
  name: "btnCorner_5px",
  color: "#ffffff",
  background: "#2196f3",
  borderRadius: "5px",
};
const btnCorner_200px = {
  name: "btnCorner_200px",
  color: "#ffffff",
  background: "#2196f3",
  borderRadius: "200px",
};
const btnChip = {
  name: "btnChip",
  color: "#ffffff",
  background: "#2196f3",
  padding: "5px 10px",
  borderRadius: "200px",
};
const ellipse = {
  fontSize: "40px",
  padding: "16px 16px",
  borderRadius: "50%",
};
const btnPrimaryEllipse = {
  ...btnPrimary,
  ...ellipse,
  name: "btnPrimaryEllipse",
};
const btnPrimaryOutlineEllipse = {
  ...btnPrimaryOutlined,
  ...ellipse,
  name: "btnPrimaryOutlineEllipse",
};
const btnPrimaryLightEllipse = {
  ...btnPrimaryLight,
  ...ellipse,
  name: "btnPrimaryLightEllipse",
};
const btnPrimaryGrayShadowEllipse = {
  ...btnPrimaryGrayShadow,
  ...ellipse,
  name: "btnPrimaryGrayShadowEllipse",
};
const btnPrimaryShadowEllipse = {
  ...btnPrimaryShadow,
  ...ellipse,
  name: "btnPrimaryShadowEllipse",
};
const btnSecondaryVector = {
  ...btnSecondary,
  name: "btnSecondaryVector",
};
//Add all buttons different  objects here
const buttonTypes = [
  btnPrimary,
  btnPrimaryOutlined,
  btnPrimaryLight,
  btnPrimaryGrayShadow,
  btnPrimaryShadow,
  btnSecondary,
  btnSecondaryOutline,
  btnSecondaryLight,
  btnSecondaryGrayShadow,
  btnSecondaryShadow,
  btnError,
  btnErrorOutline,
  btnErrorLight,
  btnErrorGrayShadow,
  btnErrorShadow,
  btnDivider,
  btnDividerOutline,
  btnDividerLight,
  btnDividerGrayShadow,
  btnCorner_5px,
  btnCorner_200px,
  btnChip,
  btnPrimaryEllipse,
  btnPrimaryOutlineEllipse,
  btnPrimaryLightEllipse,
  btnPrimaryGrayShadowEllipse,
  btnPrimaryShadowEllipse,
  btnSecondaryVector,
];

//Return the wanted button styles according the type props that send to the component
const getSelectedButtonStyle = variant =>
  buttonTypes.find(btn => btn.name === variant);

//The button styled component
const StyledButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.variant.fontSize || "14px"};
  font-family: "Open Sans", sans-serif;
  line-height: 14px;
  color: ${props => props.variant.color};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  padding: ${props => props.variant.padding || "8px 32px"};
  box-shadow: ${props => props.variant.boxShadow || "none"};
  border: ${props => props.variant.border || "none"};
  background: ${props => props.variant.background};
  opacity: ${props => props.variant.opacity || "initial"};
  border-radius: ${props => props.variant.borderRadius || "5px"};
`;

const Button = props => (
  <StyledButton
    onClick={props.onClick}
    variant={getSelectedButtonStyle(props.variant)}
  >
    <span>{props.label && <span>{props.label}</span>}</span>
  </StyledButton>
);

export default Button;
