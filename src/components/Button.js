import React from "react";
import styled from 'styled-components';


const btnPrimary = {
  name :"btnPrimary",
  color: "#ffffff",
  background: "#2196f3"
}

const buttonTypes = [
  btnPrimary
] 
const Button = styled.button`
   font-style: normal;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  line-height: 14px;
   color: ${props=>buttonTypes.find(btn=>btn.name ===props.type).color};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  padding: 8px 30px;
  border-radius: 5px;
  border: none;
  background : ${props=>buttonTypes.find(btn=>btn.name ===props.type).background};
`;

export default  props => (
  <Button type={props.type}>
    {props.label && <span>{props.label}</span>}
  </Button>
);
//export default Button;
