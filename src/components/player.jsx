import React from "react";
import Ability from "./ability";
import "./player.css";

const Player = ({ players }) => {
  const playerRatingCal = (a, b, c, x, y, z) => {
    const high = ((a + b + c)/3) * 0.7;
    console.log(high)
    const low = ((x + y + z)/3) * 0.3;
    console.log(low)
    return Math.floor(high+low)
  };

  return (
    <>
      <div className="playerContainer">
        {players.map((player) => {
          const { id, img, nickname, position, jerseyNo, ability } = player;
          const {
            defense,
            dribbling,
            passing,
            shooting,
            teamwork,
            workrate,
          } = ability;
          return (
            <>
              <div key={id} className="player-card">
                <div className="card-top">
                  <div className="master-info">
                    <div className="player-rating">
                      {position === "DEF"
                        ? playerRatingCal(defense,teamwork,workrate,passing,dribbling,shooting)
                        : playerRatingCal(passing,dribbling,shooting,defense,workrate,teamwork)
                        
                        }
                    </div>
                    <div className="player-pos">{position}</div>
                  </div>
                  <div className="player-picture">
                    <img className="profilepic" src={img} />
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="player-info">
                    <div className="player-name">{nickname}</div>
                    <Ability ability={ability} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Player;
