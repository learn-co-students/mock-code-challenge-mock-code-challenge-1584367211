import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  console.log(props.hippys);
  
  return (
    <ul className="cards">
      {props.hippys.map((oneTreeHugger)=>{
        return <Planeteer key={oneTreeHugger.id} 
        ikeepMyplasticsAndCompostablesTogether={oneTreeHugger}/>
      }
    )
  }
    </ul>
  )

};

export default PlaneteersContainer;
