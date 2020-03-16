import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {


  return (
    <ul className="cards">
      <Planeteer planeteerObj={props.planeteerArray[0]}  />
      <Planeteer planeteerObj={props.planeteerArray[1]}  />
      <Planeteer planeteerObj={props.planeteerArray[2]}  />
      <Planeteer planeteerObj={props.planeteerArray[3]}  />
      <Planeteer planeteerObj={props.planeteerArray[4]}  />
      <Planeteer planeteerObj={props.planeteerArray[5]}  />
      <Planeteer planeteerObj={props.planeteerArray[6]}  />
      <Planeteer planeteerObj={props.planeteerArray[7]}  />
    </ul>
  )

};

export default PlaneteersContainer;
