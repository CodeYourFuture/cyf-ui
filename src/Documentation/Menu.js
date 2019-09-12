import React from "react";
import "./button.css";
import LargeMenu from "../components/LargeMenu/LargeMenu";

const menuItems = [
  { navItem: "Menu Item-1", link: "#link-1" },
  { navItem: "Menu Item-2", link: "#link-2" },
  { navItem: "Menu Item-3", link: "#link-3" },
  { navItem: "Menu Item-4", link: "#link-4" },
];

const MenuDocumentation = () => {
  return (
    <div className="general">
      <div>
        <h1>Menu</h1>
        <h3>Import</h3>
        <pre>{`import { LargeMenu } from '@codeyourfuture/cyf-ui';
        \nimport { SmallMenu } from '@codeyourfuture/cyf-ui';
        `}</pre>
      </div>
      <div className="component">
        <LargeMenu menuItems={menuItems} />
      </div>
      <div>
        <div>
          <h3>Usage</h3>
          <p>large dropdown menu</p>
          <pre>{`
    <LargeMenu
      menuItems={[
        { navItem: "Menu Item-1", link: "#link-1" },
        { navItem: "Menu Item-2", link: "#link-2" },
        { navItem: "Menu Item-3", link: "#link-3" },
        { navItem: "Menu Item-4", link: "#link-4" },
      ]}
    />
        `}</pre>
          <p>small dropdown menu</p>
          <pre>{`
    <SmallMenu
      menuItems={[
        { navItem: "Menu Item-1", link: "#link-1" },
        { navItem: "Menu Item-2", link: "#link-2" },
        { navItem: "Menu Item-3", link: "#link-3" },
        { navItem: "Menu Item-4", link: "#link-4" },
      ]}
    />
          `}</pre>
          <h3>Properties</h3>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>menuItems</td>
                <td>array</td>
                <td>
                  menuItems property is an array of objects. Each menu item
                  includes menu(navItem) and the related route(link) to connect
                  when the menu is selected
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenuDocumentation;
