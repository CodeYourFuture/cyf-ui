import React from "react";
import { Ul, Ol, Li } from "../index";

export default {
  title: "List",
};

export const OrderedList = () => {
  const items = [
    { id: 1, name: "Rome" },
    { id: 2, name: "London" },
    { id: 3, name: "Istanbul" },
    { id: 4, name: "New York" },
    { id: 5, name: "El Cairo" },
  ];

  return (
    <>
      <Ol>
        {items.map((item) => (
          <Li key={item.id}>{item.name}</Li>
        ))}
      </Ol>

      <Ol variant="secondary">
        {items.map((item) => (
          <Li key={item.id}>{item.name}</Li>
        ))}
      </Ol>
    </>
  );
};

export const UnorderedList = () => {
  const items = [
    { id: 1, name: "Rome" },
    { id: 2, name: "London" },
    { id: 3, name: "Istanbul" },
    { id: 4, name: "New York" },
    { id: 5, name: "El Cairo" },
  ];

  return (
    <Ul>
      {items.map((item) => (
        <Li key={item.id}>{item.name}</Li>
      ))}
    </Ul>
  );
};
