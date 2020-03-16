import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const URL = 'http://localhost:4000/planeteers'
const getPlaneteers = () => fetch(URL).then(resp => resp.json())

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""

  }

  componentDidMount(){ //initial fetch to render data
    getPlaneteers().then(planeteersArray => {
      console.log(planeteersArray)

      this.setState({
        planeteers: planeteersArray
      })

    })
  }

  changeSearchTerm = (term) => {

    this.setState({searchTerm: term})
    
  }

  filterThePlaneteers = () => {
    let filteredArrayOfPlaneteers = this.state.planeteers.filter((planeteerObj) => {
      return (planeteerObj.name.toLowerCase().includes(this.state.searchTerm) || planeteerObj.bio.toLowerCase().includes(this.state.searchTerm))
        
    })
      return filteredArrayOfPlaneteers
  }



  addRandomPlaneteer = (randomPlaneteer) => {

    fetch(`http://localhost:4000/planeteers`, {
      method: "POST",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(randomPlaneteer)
    })
    .then(resp => resp.json())
    .then(newPlaneteer => {
    
      let updatedArray = [newPlaneteer, ...this.state.planeteers]
      this.setState({
        planeteers: updatedArray
      })})
    
  }

  deleteOnePlaneteer = (id) => {
    let diffArray = this.state.planeteers.filter((planeteerObj) => {
      return (planeteerObj.id !== id)
    })
    
    fetch(`http://localhost:4000/planeteers/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
    
    this.setState({
      planeteers: diffArray
    })
    
  })



    }
  
  

  render(){
    (this.filterThePlaneteers())
    return (
      <div>
        <Header />
        <SearchBar changeSearchTerm={this.changeSearchTerm} searchTerm={this.state.searchTerm}/>
        <RandomButton addRandomPlaneteer={this.addRandomPlaneteer}/>
        <PlaneteersContainer planeteers={this.filterThePlaneteers()} deleteOnePlaneteer={this.deleteOnePlaneteer}/> 
      </div>
    );
  }

}

export default App;
