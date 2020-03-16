import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  // console.log(props.planeteers)
  const arrayOfComponents = props.planeteers.map( planeteer => {
    return <Planeteer planeteer={planeteer} key={planeteer.id} deleteOnePlaneteer={props.deleteOnePlaneteer} /> 
  })

  return (
    <ul className="cards">
      {
        arrayOfComponents
      }
    </ul>
  )

};

export default PlaneteersContainer;
