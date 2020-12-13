import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BaseEmoji = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;
  background-color: transparent;
  border-radius: 100px;
  color: ${({ color }) => color || "#1B365D"};
`;

export const BaseSmileyEmoji = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;
  background-color: ${({ color }) => color || "#28A228"};
  border-radius: 100px;
  border: 1.5px solid ${({ color }) => color || "#28A228"}; ;
`;
