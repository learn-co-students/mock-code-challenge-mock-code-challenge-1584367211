import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let planeteersComponentArray = props.planeteers.map(planeteer => {
    return <Planeteer 
      key={planeteer.id}
      planeteerObject={planeteer}
    />
  })

  return (
    <ul className="cards">
      {planeteersComponentArray}
    </ul>
  )

};

export default PlaneteersContainer;
