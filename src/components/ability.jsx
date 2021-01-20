import React from "react";
import "./player.css";

const Ability = ({ ability }) => {
  const {
    defense,
    dribbling,
    gk,
    passing,
    shooting,
    teamwork,
    workrate,
  } = ability;
  return (
    <>
      <div className="player-features">
        <div className="player-features-col">
          <span>
            <div className="player-feature-value">{dribbling}</div>
            <div className="player-feature-title">DRI</div>
          </span>
          <span>
            <div className="player-feature-value">{passing}</div>
            <div className="player-feature-title">PAS</div>
          </span>
          <span>
            <div className="player-feature-value">{shooting}</div>
            <div className="player-feature-title">SHO</div>
          </span>
        </div>
        <div className="player-features-col">
          <span>
            <div className="player-feature-value">{defense}</div>
            <div className="player-feature-title">DEF</div>
          </span>
          <span>
            <div className="player-feature-value">{teamwork}</div>
            <div className="player-feature-title">TW</div>
          </span>
          <span>
            <div className="player-feature-value">{workrate}</div>
            <div className="player-feature-title">WR</div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Ability;
