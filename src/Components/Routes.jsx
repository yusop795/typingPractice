// Components/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TypingField from "../Screens/TypingField";
import LionKing from "../Screens/LionKing";
import SpiderMan from "../Screens/SpiderMan";
import Header from "./Header";
import Body from "./Body";

export default () => (
  <Router>
    <Body />
    <Route path="/typingfield" component={TypingField} />
    <Route path="/lionking" component={LionKing} />
    <Route path="/spiderman" component={SpiderMan} />
  </Router>
);
