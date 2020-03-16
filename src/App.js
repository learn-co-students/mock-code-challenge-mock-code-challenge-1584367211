import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'
import Planeteer from './Components/Planeteer';

class App extends React.Component {
  state= {
    planeteers: []
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/planeteers')
    .then(r => r.json())
    .then(planeteersArr =>{
      this.setState({
        planeteers: planeteersArr
      })
    })
  }

  getFilteredPlaneteers = (termFromBar) => {
    //we have to change the state here with termFromBar and send a filtered Array to planeteer container
  //  let filteredPlaneteerArray = this.state.planeteers.filter(planeteer => planeteer.includes(termFromBar))
  //  this.setState({
  //    planeteers: filteredPlaneteerArray
  //  })
    console.log('hi')
  }
  render(){
    console.log(this.getFilteredPlaneteers())
    return (
      <div>
        <Header />
        <SearchBar getFilteredPlaneteers={this.getFilteredPlaneteers}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers} />
      </div>
    );
  }

}

export default App;
