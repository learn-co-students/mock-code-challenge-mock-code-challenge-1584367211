import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (planeteerObjs) => {

  let renderPlaneteers = planeteerObjs.dataObj.map(planeteerBoys => {
    return <Planeteer planeteer={planeteerBoys} key={planeteerBoys.id}/>
  })



  return (
    <ul className="cards">
      {
        renderPlaneteers
      }
    </ul>
  )

};

export default PlaneteersContainer;
