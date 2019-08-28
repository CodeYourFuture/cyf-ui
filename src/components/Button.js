import React from "react";
import styled from 'styled-components';


//Here starts our specific button styles
const btnPrimary = {
  name :"btnPrimary",
  color: "#ffffff",
  background: "#2196f3"
}

const btnPrimaryOutlined = {
  name :"btnPrimaryOutlined",
   color: "#2196f3",
  background: "#ffffff",
  border: "2px solid #03a9f4"
}

//Add all buttons different  objects here 
const buttonTypes = [
  btnPrimary,
  btnPrimaryOutlined
] 

//Return the wanted button styles according the type props that send to the component
const getSelectedButtonStyle =(type)=>{

  const x=   buttonTypes.find(btn=>btn.name === type)
 console.log(x)
 return x;
}

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
  border:${props=>props.type.background?props.type.border :  "none"};
  background : ${props=>props.type.background};
`;

export default  props => (
  <Button type={getSelectedButtonStyle(props.type)}>
    {props.label && <span>{props.label}</span>}
  </Button>
);
//export default Button;
