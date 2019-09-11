import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CardWrapper = styled.article`
  display: flex;
  align-items: stretch;
  background: #ffffff;
  /* 2px - Active Card */
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  // position: absolute;
  width: 70%;
  height: 50%;
  font-family: "Open Sans", sans-serif;
`;
const CardDivider = styled.span`
  background-color: #e0e0e0;
  width: 40%;
`;

const BtnBodyHeaderContainer = styled.div`
  margin: 5px 0px 20px 20px;
`;

const Body = styled.p`
  letter-spacing: 0.5px;
  font-size: 18px;
  line-height: 28px;
`;

const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const renderButtons = (label, variant, onClickHandler) => {
  return (
    <Button
      label={label ? label : "Button"}
      variant={variant}
      onClick={onClickHandler ? onClickHandler : () => {}}
    />
  );
};

const Card = props => {
  const {
    divider,
    src,
    leftButtonLabel,
    rightButtonLabel,
    leftButtonOnClickHandler,
    rightButtonOnClickHandler,
  } = props;
  return (
    <CardWrapper>
      {divider && (
        <CardDivider>
          <img src={src ? src : ""} style={{ width: "100%" }} />
        </CardDivider>
      )}
      <BtnBodyHeaderContainer className={props.btnBodyHeaderContainer}>
        <h1>{props.title}</h1>
        <Body>{props.body}</Body>
        <ButtonsContainer className={props.buttonsContainerClass}>
          {renderButtons(
            leftButtonLabel,
            "btnPrimaryOutlined",
            leftButtonOnClickHandler
          )}
          {renderButtons(
            rightButtonLabel,
            "btnPrimaryOutlined",
            rightButtonOnClickHandler
          )}
        </ButtonsContainer>
      </BtnBodyHeaderContainer>
    </CardWrapper>
  );
};

export default Card;
