import React from "react";

import { Item, Anchor } from "./styles";

export const Group = ({ name, slug }) => (
  <Item>
    <Anchor href={slug}>{name}</Anchor>
  </Item>
);
