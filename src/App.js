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
    let filterByNameOrBio = this.state.planeteers.filter(planeteerObject => {
      return planeteerObject.name.toLowerCase().includes(this.state.filterTerm.toLowerCase()) || planeteerObject.bio.toLowerCase().includes(this.state.filterTerm.toLowerCase()) 
    })
    return filterByNameOrBio
  }

  addNewPlaneteer = (newPlaneteer) => {
    
    fetch("http://localhost:4000/planeteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlaneteer)
    })
      .then(response => response.json())
      .then(result => {
        let newArray = [...this.state.planeteers, result]
        this.setState({
          planeteers: newArray
        })
      })

  }

  deleteOnePlaneteer = (planeteerID) => {
    fetch(`http://localhost:4000/planeteers/${planeteerID}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => {
      let newArray = this.state.planeteers.filter(planeteer => {
        return planeteer.id !== planeteerID
      })
      this.setState({
        planeteers: newArray
      })
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
        <PlaneteersContainer 
          planeteers={this.renderPlaneteers()} 
          deleteOnePlaneteer={this.deleteOnePlaneteer}
        />
      </div>
    );
  }

}

export default App;
