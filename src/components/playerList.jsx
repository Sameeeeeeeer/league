import Player from "./player";
import React, { useState } from "react";
import playerData from "../data/playerData";

const Playerlist = () => {
  const [players, setPlayers] = useState(playerData);
  return (
    <div>
      <Player players={players} />
    </div>
  );
};

export default Playerlist;
