import React from "react";
import styled from "styled-components";

export const Dropdown = (props) => {
  const { panel: Panel } = props;
  const [showPanel, setShowPanel] = React.useState(false);
  console.log(Panel);
  const onToggle = () => setShowPanel(!showPanel);

  return (
    <div>
      <button type="button" onClick={onToggle}>
        {showPanel ? "Hide Panel" : "Show Panel"}
      </button>
      <br />
      <br />
      <br />
      {showPanel ? <Panel /> : null}
    </div>
  );
};

export const DropdownPanel = styled.div`
  background: red;
  height: 200px;
  width: 200px;
`;
