import React from "react";
import { storiesOf } from "@storybook/react";
import MenuDocumentation from "../Documentation/Menu";
import SmallMenu from "../components/SmallMenu/SmallMenu";
import LargeMenu from "../components/LargeMenu/LargeMenu";

import "./menuStories.css";

storiesOf("Menu", module)
  .add("documentation", () => <MenuDocumentation />)
  .add("large dropdown menu", () => (
    <LargeMenu
      menuItems={[
        { navItem: "Menu Item-1", link: "#link-1" },
        { navItem: "Menu Item-2", link: "#link-2" },
        { navItem: "Menu Item-3", link: "#link-3" },
        { navItem: "Menu Item-4", link: "#link-4" },
      ]}
    />
  ))
  .add("small dropdown menu", () => (
    <SmallMenu
      menuItems={[
        { navItem: "Menu Item-1", link: "#link-1" },
        { navItem: "Menu Item-2", link: "#link-2" },
        { navItem: "Menu Item-3", link: "#link-3" },
        { navItem: "Menu Item-4", link: "#link-4" },
      ]}
    />
  ));
