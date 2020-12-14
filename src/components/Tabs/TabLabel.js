import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Li = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  margin-right: 0.5rem;
  background-color: lightgrey;
  color: #074a95;
  font-weight: 700;
  padding: 1rem 1.5rem;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: white;
      border: solid rgb(246, 245, 247);
      border-width: 1px 1px 0 1px;
    `}
`;

export const TabLabel = ({ clickTabItem, active, label }) => {
  return (
    <Li active={active} onClick={() => clickTabItem(label)} aria-hidden="true">
      {label}
    </Li>
  );
};

TabLabel.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  clickTabItem: PropTypes.func.isRequired,
};
