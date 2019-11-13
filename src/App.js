import React, { Fragment } from "react";

import { Groups } from "./components/Groups";
import { ListOfSpells } from "./components/ListOfSpells";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <Groups />
    <ListOfSpells />
  </Fragment>
);
