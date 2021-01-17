import React from "react";
import Ability from "./ability";
import './player.css'

const Player = ({ players }) => {
  return (
    <>
    <div className="playerContainer">
      {players.map((player) => {
        const { id, nickname, position, jerseyNo } = player;
        return (
          <>
          <div key={id} className="playerCard">
            <h3>{nickname}</h3>
            <p>{position}</p>
            <p>{jerseyNo}</p>
          </div>
          <Ability ability={player.ability}/>
          </>
        );
      })}
    </div>
      </>
  );
};

export default Player;
