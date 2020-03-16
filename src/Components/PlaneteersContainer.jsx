import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  // console.log(planet);
  let renderPlaneters = props.planet.map((onePlanet) => {
    return <Planeteer key={onePlanet.id} planet={onePlanet}/>
  })
  return (
    <ul className="cards">
     {renderPlaneters}
    </ul>
  )

};

export default PlaneteersContainer;
