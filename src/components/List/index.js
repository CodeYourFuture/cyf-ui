import styled, { css } from "styled-components";
import { PropTypes } from "prop-types";

const colors = {
  primary: "black",
  secondary: "green",
  error: "red",
};

export const Li = styled.li``;

export const Ol = styled.ol`
  ${({ variant }) => css`
    ${Li} {
      color: ${colors[variant]};
    }
  `}
`;

export const Ul = styled.ul`
  ${({ variant }) => css`
    ${Li} {
      color: ${colors[variant]};
    }
  `}
`;

Ul.propTypes = {
  variant: PropTypes.oneOf("primary", "secondary", "error"),
};

Ul.defaultProps = {
  variant: "primary",
};
