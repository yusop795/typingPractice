// Components/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TypingField from "../Screens/TypingField";
import ReadyGame from "../Screens/ReadyGame";
import Body from "./Body";

export default () => (
  <Router>
    <Body />
    <Route path="/ready" component={ReadyGame} />
    <Route path="/start" component={TypingField} />
  </Router>
);
