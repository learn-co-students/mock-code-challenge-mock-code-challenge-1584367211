import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    AllPlaneteers: []
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
    .then(r => r.json())
    .then(data => this.setState(
      {AllPlaneteers: data}
    ))
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteerArray={this.state.AllPlaneteers}/>
      </div>
    );
  }

}

export default App;
