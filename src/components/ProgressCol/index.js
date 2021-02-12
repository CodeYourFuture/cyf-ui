import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const Check = styled(FontAwesomeIcon)`
  color: black;
  font-size: 24px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const No = styled.div`
  margin-top: 9px;
  font: 16px Arial, sans-serif;
  font-weight: 700;
`;
export const ProgressCheck = ({ count, onClick }) => {
  return (
    <Wrapper>
      <Check icon={faCheck} />
      <No onClick={onClick}>{count}</No>
    </Wrapper>
  );
};
ProgressCheck.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
