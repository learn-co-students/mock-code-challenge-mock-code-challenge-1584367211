import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

// 1. When our React application is mounted, it should render out the list of Planeteers on the page, 
  // using the given Planeteer component.
  
  //     a) In addition to showing a Planeteer's name, twitter handle, picture,
  //      the Planeteer card should also show the proper _age_ of the Planeteer. 
  //      In our `db.json`, we just have the year that the Planeteer was born. 
  //      To calculate the age, first figure out how to get the current year in JavaScript. 
  //      Once you figure that out, you can subtract the year that the Planeteer was born in to get the proper age.
  
  //     b) If a Planeteer is from the USA, the card should say "USA-based".
  //      Otherwise, the card should read "Working Overseas".
  
  //     c) The Planeteer component should, by default, render the bio of the Planeteer. 
  //     However, when we click on an image of a Planeteer, the specific card that we clicked on should instead 
  //     render the quote for that specific Planeteer in place of where the bio was. Consider how to dynamically
  //      toggle back and forth between the quote and bio for each of the cards.

class App extends React.Component {

  state = {
    planeteers: []
  }
  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then((planeteerObjs) => {
        this.setState({
          planeteers: planeteerObjs
        })
      })
  }

  render(){
    // console.log(this.state)
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers} />
      </div>
    );
  }

}

export default App;
