import React from "react";
import "./textbox.scss";

class Textbox extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // const { point, name } = this.props.data;
    return (
      <div className="textField">
        <input type="text" className="textbox" />
      </div>
    );
  }
}

export default Textbox;
