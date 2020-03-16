import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  //iterate through props.planeteers and render them
  const renderPlaneteers = () => {
    return props.planeteers.map(planeteerObj => {
        return <Planeteer
                key={planeteerObj.id}
                planeteer={planeteerObj}
                />
    })
  }
  return (
    <ul className="cards">
      {renderPlaneteers()}
    </ul>
  )

};

export default PlaneteersContainer;
