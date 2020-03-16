import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  //Map through Planeteers Array and created a Planeteer component for each one, passing in entire planeteer obj as props
  let arrayOfPlaneteers = props.planeteers.map(planeteer => {
      return <Planeteer 
                key = {planeteer.id}
                planeteerFriend = {planeteer}

              />
  })

  return (
    <ul className="cards">
      {
       arrayOfPlaneteers
      }
    </ul>
  )

};

export default PlaneteersContainer;
