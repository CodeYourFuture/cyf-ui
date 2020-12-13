import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Check = styled(FontAwesomeIcon)`
  color: black;
  font-size: 24px;
`;
export const ProgressCheck = () => <Check icon={faCheck} />;
