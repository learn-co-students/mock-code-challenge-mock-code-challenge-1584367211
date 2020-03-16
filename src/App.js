import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planet: []
  }

  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
    .then(r => r.json())
    .then((planteers) => {
      this.setState({
        planet: planteers
      })
    })
  }

  render(){
    // console.log(this.state.planet);   
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planet = {this.state.planet}/>
      </div>
    );
  }

}

export default App;
