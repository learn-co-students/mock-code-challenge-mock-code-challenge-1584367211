import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    filterTerm: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/planeteers")
    .then(response => response.json())
    .then(planteersArray => {
      this.setState({
        planeteers: planteersArray
      })
    })
  }

  handleFilterTerm = (termFromChild) => {
    this.setState({
      filterTerm: termFromChild
    })
  }

  renderPlaneteers = () => {
    let filterByName = this.state.planeteers.filter(planeteerObject => {
      return planeteerObject.name.toLowerCase().includes(this.state.filterTerm.toLowerCase()) || planeteerObject.bio.toLowerCase().includes(this.state.filterTerm.toLowerCase()) 
    })
    return filterByName
  }

  addNewPlaneteer = (newPlaneteer) => {
    let newPlaneteerObject = {
      ...newPlaneteer,
      id: 20
    }
    let newArray = [...this.state.planeteers, newPlaneteerObject]
    this.setState({
      planeteers: newArray
    })
  }
  
  render(){

    return (
      <div>
        <Header />
        <SearchBar 
          filterTerm={this.state.filterTerm}
          handleFilterTerm={this.handleFilterTerm}
        />
        <RandomButton addNewPlaneteer={this.addNewPlaneteer}/>
        <PlaneteersContainer planeteers={this.renderPlaneteers()}/>
      </div>
    );
  }

}

export default App;
