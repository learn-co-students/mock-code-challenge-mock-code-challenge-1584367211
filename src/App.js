import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    annoyingHippys: [],
    seekingHippys: ''
  }

  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
      .then(res => res.json())
      .then(data => {
        this.setState({  
          annoyingHippys: data
        })
      })
  }
  
  filterHippys = (event) => {

    this.setState({
      seekingHippys: event.target.value
    })
  }
  
  render(){


    return (
      <div>
        <Header />
        <SearchBar captainPlanetWasATerribleTVShow={this.filterHippys} />
        <RandomButton/>
        <PlaneteersContainer hippys={this.state.annoyingHippys}/>
      </div>
    );
  }

}

export default App;
