import React from "react";
import "./ranking.scss";

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // const { point, name } = this.props.data;
    return (
      <div className="ranking_container">
        <strong>Ranking</strong>
        <ul className="rank_list">
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Ranking;
