import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Circle = styled.div`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  padding: 3px;

  background: #335eff;
  border: 2px solid #335eff;
  color: white;
  text-align: center;
  font-weight: 800;
  font: 13px Arial, sans-serif;
`;

export const CircleWithNum = ({ num, onClick }) => {
  return (
    <Circle data-testid="clc" onClick={onClick}>
      {num}
    </Circle>
  );
};

CircleWithNum.propTypes = {
  num: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
