import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state={
    planeteers: [],
    search: ""
  }

  componentDidMount(){
    fetch(`http://localhost:4000/planeteers`)
    .then(resp => resp.json())
    .then(planeteers => this.setState({planeteers: planeteers}))
  }

  filterSearch = () => {
    let fillteredPlaneteers = this.state.planeteers.filter(planeteer => {
      let searchValue = this.state.search.toLowerCase()
      return planeteer.name.toLowerCase().includes(searchValue) || planeteer.bio.toLowerCase().includes(searchValue)
    })
      return fillteredPlaneteers
  }

  handleSearch = (userSearch) => {
      this.setState({
        search: userSearch
      })
  }

  newPlaneteer = (newPlaneteer) => {
      let newArrPlaneteers = [...this.state.planeteers, newPlaneteer]
      this.setState(prevState => {
        return {
          planeteers: newArrPlaneteers
        }
      })
  }  

  render(){
    // console.log(this.state)
    return (
      <div>
        <Header />
        <SearchBar search={this.state.search} handleSearch={this.handleSearch}/>
        <RandomButton newPlaneteer={this.newPlaneteer} />
        <PlaneteersContainer planeteers={this.filterSearch()} />
      </div>
    );
  }

}

export default App;
