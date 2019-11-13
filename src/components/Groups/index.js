import React from "react";

import { List, Nav } from "./styles";
import { Group } from "../Group";

const categories = [
  {
    name: "Neutrales",
    slug: "#"
  },
  {
    name: "Orden del Fénix",
    slug: "#"
  },
  {
    name: "Marca Tenebrosa",
    slug: "#"
  },
  {
    name: "Libros de Hechizos",
    slug: "#"
  }
];

export const Groups = () => (
  <Nav>
    <List>
      {categories.map((category, key) => (
        <Group key={key} {...category} />
      ))}
    </List>
  </Nav>
);
