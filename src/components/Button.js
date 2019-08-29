import React from "react";
import styled from 'styled-components';


//Here starts our specific button styles: 


/* primary buttons styling */
const btnPrimary = {
  name :"btnPrimary",
  color: "#ffffff",
  background: "#2196f3"
};

const btnPrimaryOutlined = {
  name :"btnPrimaryOutlined",
   color: "#2196f3",
  background: "#ffffff",
  border: "2px solid #03a9f4"
};

const btnPrimaryLight = {
  name : "btnPrimaryLight",
  color: "#2196f3",
  background: "#b3e5fc"
};

const btnPrimaryGrayShadow ={
  name :"btnPrimaryGrayShadow",
  color: "#2196f3",
  background: "#ffffff",
  boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)"
};
const btnPrimaryShadow = {
  name:"btnPrimaryShadow",
  color: "#2196f3",
  background: "#ffffff",
  boxShadow: "0px 2px 4px #03A9F4"

};


/* secondary buttons styling */
const btnSecondary = {
  name : "btnSecondary",
  color: "#ffffff",
  background: "#4CAF50"
};
const btnSecondaryOutline = {
  name:"btnSecondaryOutline",
   color: "#4CAF50",
  background: "#ffffff",
  border: "2px solid #4CAF50"
};
const btnSecondaryLight ={
  name:"btnSecondaryLight",
  color: "#388E3C",
  background: "#81C784",
  opacity: "0.8"
};
const btnSecondaryGrayShadow = {
  name:"btnSecondaryGrayShadow",
   color: "#388E3C",
  background: "#ffffff",
  boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),0px 2px 4px rgba(0, 0, 0, 0.14)"
};
const btnSecondaryShadow ={
  name : "btnSecondaryShadow",
  color: "#388E3C",
  background: "#ffffff",
  boxShadow: "0px 2px 4px #4CAF50"
};


/* error buttons styling */
const btnError ={
  name:"btnError",
  color: "#ffffff",
  background: "#f44336"
};
const btnErrorOutline ={
  name :"btnErrorOutline",
  color: "#f44336",
  background: "#ffffff",
  border: "2px solid #f44336"
};
const btnErrorLight={
  name:"btnErrorLight",
  color: "#f44336",
  background: "#FFCDD2",
  opacity: "0.8"
};
const btnErrorGrayShadow ={
  name:"btnErrorGrayShadow",
  color: "#f44336",
  background: "#ffffff",
  boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12),0px 2px 4px rgba(0, 0, 0, 0.14)"
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
  btnErrorGrayShadow
] 

//Return the wanted button styles according the type props that send to the component
const getSelectedButtonStyle =(type)=>buttonTypes.find(btn=>btn.name === type);

//The button styled component 
const Button = styled.button`
   font-style: normal;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  line-height: 14px;
   color: ${props=>props.type.color};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  padding: 8px 30px;
  border-radius: 5px;
  box-shadow : ${props=>props.type.background?props.type.boxShadow : "none"};
  border:${props=>props.type.border?props.type.border : "none"};
  background : ${props=>props.type.background};
  opacity: ${props=>props.type.opacity?props.type.opacity : "initial"}; 
`;

export default  props => (
  <Button type={getSelectedButtonStyle(props.type)}>
    {props.label && <span>{props.label}</span>}
  </Button>
);
