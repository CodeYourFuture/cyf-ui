import React from "react";
import styled from "styled-components";
import { Tabs, Tab } from "..";

const Wrapper = styled.div`
  background: snow;
  height: 80vh;
`;

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Default = () => (
  <Wrapper>
    <h1>Tabs Component Demo</h1>
    <Tabs>
      <Tab label="Steps" >
       This is <em>Tab-1-Steps</em>!
      </Tab>
      <Tab label="Calls" >
        This is <em>Tab-2-Calls</em>!
      </Tab>
      <Tab label="Workshops" >
        This is <em>Tab-3-Workshops</em>!
      </Tab>
    </Tabs>
  </Wrapper>
);
