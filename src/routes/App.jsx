import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TypingField from "../containers/TypingField";
import ReadyGame from "../containers/ReadyGame";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Route path="/ready" component={ReadyGame} />
        <Route path="/start" component={TypingField} />
      </Router>
    </div>
  );
}

export default App;
