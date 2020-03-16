import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const API = "http://localhost:4000/planeteers"

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""
  }

  // mounted
  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        planeteers: data
      })
    })
  }

  //searchTermChange to setState for searchTerm.
  changeSearchTerm = (childTerm) => {
    this.setState({
      searchTerm: childTerm
    })
  }

  //handles change for child, uses above setState function.
  handleChange = (e) => {
    this.changeSearchTerm(e.target.value)
  }

  // function that'll filter based on searchTerm, if not filtered, show every1.
  returnedArray = () => {
    let filteredArray = this.state.planeteers.filter((planeteer) => {
      return planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || planeteer.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredArray
  }

  //add planeteer?
  addPlaneteer = (newPlaneteer) => {
    let newArray = [...this.state.planeteers, newPlaneteer]

    this.setState({
      planeteers: newArray
    })
  }


  //update planeteer?

  //delete planeteer?
  deletePlaneteer = (id) => {
    fetch(API + `/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      let filteredArray = this.state.planeteers.filter(planeteer => {
        return planeteer.id !== id
      })
      this.setState({
        planeteers: filteredArray
      })
    })
  }


  render(){
    return (
      <div>
        <Header />
        <SearchBar 
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />

        <RandomButton addPlaneteer={this.addPlaneteer}/>
        <PlaneteersContainer 
          planeteers={this.returnedArray()}
          deletePlaneteer={this.deletePlaneteer}
          />
      </div>
    );
  }

}

export default App;
