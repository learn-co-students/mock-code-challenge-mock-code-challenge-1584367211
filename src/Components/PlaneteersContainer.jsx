import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  // console.log(props)

  let array = props.planeteers.map((PlaneteerPOJO) => {
    return <Planeteer Objs={ PlaneteerPOJO } key={PlaneteerPOJO.id}/>
  })

  return (
    <ul className="cards">
      {
       array
      }
    </ul>
  )

};

export default PlaneteersContainer;
