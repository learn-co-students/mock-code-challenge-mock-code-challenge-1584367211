import React from 'react';
import Planeteer from './Planeteer'


const PlaneteersContainer = (planeterObjs) => {
// console.log(planeterObjs.dataObjs)

let ok = planeterObjs.dataObjs.map(planeteerBois => {
  return <Planeteer planeteerObj={planeteerBois} key={planeteerBois.id}/>
})




  return (
    
    <ul className="cards">
      {
        ok
      }
    </ul>
  )

};

export default PlaneteersContainer;

// let toyObjs = propsObj.isaac.map(toyObj => {
//   return <ToyCard toy={toyObj} key={toyObj.id} deleteToy={propsObj.deleteToy} addLike={propsObj.addLike}/>
//  })

