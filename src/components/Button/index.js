import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  font-style: normal;
`;

export const StyledPrimaryButton = styled.button`
  width: 135.88px;
  left: 2354px;
  top: 1432px;
  color: ${(props) => (props.color ? props.color : `#ffffff`)};
  background-color: ${(props) =>
    props.background ? props.background : `#00a3ff`};
  border-color: #00a3ff;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledSecondaryButton = styled.button`
  width: 135.88px;
  left: 2354px;
  top: 1432px;
  color: ${(props) => (props.color ? props.color : `#ffffff`)};
  background-color: ${(props) =>
    props.background ? props.background : `#28a745`};
  border-color: #28a745;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledDangerButton = styled.button`
  width: 135.88px;
  left: 2354px;
  top: 1432px;
  color: ${(props) => (props.color ? props.color : `#ffffff`)};
  background-color: ${(props) =>
    props.background ? props.background : `#dc3545`};
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}`;

export const StyledOutlinedButton = styled.button`
  width: 135.88px;
  left: 2354px;
  top: 1432px;
  color: ${(props) => (props.color ? props.color : `#007bff`)};
  background-color: ${(props) =>
    props.background ? props.background : `#ffffff`};
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid ${(props) => (props.color ? props.color : `#007bff`)};
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const PrimaryButton = ({ ...args }) => (
  <StyledPrimaryButton background={args.background} color={args.color}>
    {args.label}
  </StyledPrimaryButton>
);

export const SecondaryButton = ({ ...args }) => (
  <StyledSecondaryButton background={args.background} color={args.color}>
    {args.label}
  </StyledSecondaryButton>
);

export const DangerButton = ({ ...args }) => (
  <StyledDangerButton background={args.background} color={args.color}>
    {args.label}
  </StyledDangerButton>
);

export const OutlinedButton = ({ ...args }) => (
  <StyledOutlinedButton background={args.background} color={args.color}>
    {args.label}
  </StyledOutlinedButton>
);
