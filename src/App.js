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
      return (planeteerObj.name.toLowerCase().includes(this.state.searchTerm) || planeteerObj.bio.includes(this.state.searchTerm))
        
    })
      return filteredArrayOfPlaneteers
  }

  render(){
    (this.filterThePlaneteers())
    return (
      <div>
        <Header />
        <SearchBar changeSearchTerm={this.changeSearchTerm} searchTerm={this.state.searchTerm}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filterThePlaneteers()}/> 
      </div>
    );
  }

}

export default App;
