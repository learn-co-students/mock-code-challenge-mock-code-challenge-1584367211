import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then( r => r.json())
    .then( resp => {
      this.setState({ 
        planeteers: resp
      })
    })
  }

  handleSearchTerm = (term) => {
    // console.log(term)
    this.setState({
      searchTerm: term
    })
  }

  returnNewArray = (e) => {
    let filteredArray = this.state.planeteers.filter( planeteer => {
      return planeteer.name.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
    })
    return filteredArray
  }

  addOnePlaneteer = (planeteerObj) => {
    let correctFormat = {
      name: planeteerObj.name, 
      fromUSA: planeteerObj.fromUSA,
      born: planeteerObj.born,
      bio: planeteerObj.bio,
      quote: planeteerObj.quote,
      pictureUrl: planeteerObj.pictureUrl,
      twitter: planeteerObj.twitter
    }
    // console.log(correctFormat)
    fetch("http://localhost:4000/planeteers" , {
      method: "POST", 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(correctFormat)
    })
    .then( r => r.json())
    .then( newPlaneteer => {
      let newArray = [...this.state.planeteers, newPlaneteer]
      this.setState({
        planeteers: newArray
      })
    })
    // console.log(newArray)
  }

  deleteOnePlaneteer = (id) => {
    fetch(`http://localhost:4000/planeteers/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then( emptyObj => {
      let newArray = this.state.planeteers.filter( planeteerObjKept => {
        return planeteerObjKept.id !== emptyObj.id
      })
        this.setState({
          planeteers: newArray
        })
    })
    // It is deleting an instance of a planeteer but I have to refresh in order for it to show
    // messed up on line 73 ~ 76
  }


  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <RandomButton addOnePlaneteer={this.addOnePlaneteer} />
        <PlaneteersContainer planeteers={this.returnNewArray()} deleteOnePlaneteer={this.deleteOnePlaneteer} />
      </div>
    );
  }

}

export default App;
