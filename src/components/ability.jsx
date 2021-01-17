import React from "react";

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
  <h4>Stats</h4>
  <ul>
    <li>{defense}</li>
  </ul>
  </>
  )
};

export default Ability;
