import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  return (
    <ul className="cards">
      {
        props.planeteers.map((planeteer) => {
          return <Planeteer 
            key={planeteer.id}
            renderBioOrQuote={props.renderBioOrQuote}
            bioOrQuote={props.bioOrQuote}
            planeteer={planeteer}
            deletePlaneteer={props.deletePlaneteer}
          />
        })
      }
    </ul>
  )

};

export default PlaneteersContainer;
