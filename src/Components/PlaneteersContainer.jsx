import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  let planeteerMap = props.planeteerData.map(planeteerObj=>{
    return <Planeteer key={planeteerObj.name} id={planeteerObj.id} name={planeteerObj.name} fromUSA={planeteerObj.fromUSA}
    born={planeteerObj.born} bio={planeteerObj.bio} quote={planeteerObj.quote} pictureUrl={planeteerObj.pictureUrl}
    twitter={planeteerObj.twitter} face={planeteerObj.face} switchText={props.switchText}/>

  })
  

  return (
    <ul className="cards">
      {
        planeteerMap
      }
    </ul>
  )

};

export default PlaneteersContainer;
