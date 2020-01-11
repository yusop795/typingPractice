import React from "react";
import "./ranking.scss";

function Ranking(ranking) {
  console.log("ranking", ranking.rankers);
  return (
    <div className="ranking_container">
      <strong>Ranking</strong>
      <ul className="rank_list">
        {ranking.rankers.map((v, i) => {
          const div = v.name.indexOf('#');
          return (
            <li key={i}>
              <div className="ranker_name">{v.name.substr(0,div)}</div>
              <div className="ranker_point">{v.point}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Ranking;
