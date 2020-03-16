import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const API = "http://localhost:4000/planeteers"
class App extends React.Component {
  state={
    planeteerData: [],
    filtered: [],
    typeinp: ""
  }

  async componentDidMount(){
    let resp = await fetch(API) 
    let planateersArray = await resp.json()
    this.setState({
      planeteerData:planateersArray,
      filtered:planateersArray
    })
  }

  switchText=(selectPlaneteer)=>{
    let {planeteerData} = this.state
    if(selectPlaneteer.face !== "quote"){
      let updatedArray = planeteerData.map(planetObj=>{
        if(planetObj.id === selectPlaneteer.id){
          return {
            ...planetObj,
            face:"quote"}
          }
          else{return planetObj}
        })
        this.setState({
          filtered:updatedArray,
          planeteerData:updatedArray
        })
        console.log(selectPlaneteer)
      }
    else{
      let updatedArray = planeteerData.map(planetObj=>{
        if(planetObj.id === selectPlaneteer.id){
          return {
            ...planetObj,
            face:"bio"}
          }
          else{return planetObj}
        })
        this.setState({
          filtered:updatedArray,
          planeteerData:updatedArray

        })
    }
  }

  search = async (event)=>{
   await this.setState({
      typeinp: event.target.value
    })
    this.filterP()
  }

  filterP =()=>{
    let {planeteerData} = this.state
    let filteredArray = planeteerData.filter(planetObj=>{
      if(planetObj.name.toLowerCase().includes(this.state.typeinp)){
        return planetObj
      }
    })
    this.setState({
      filtered: filteredArray
    })
  }

  addOneP=(newP)=>{
    let {planeteerData} = this.state
    let updatedArray = planeteerData
    updatedArray.push(newP)
    this.setState({
      filtered: updatedArray,
      planeteerData: updatedArray
    })
    
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar search={this.search}/>
        <RandomButton addOneP={this.addOneP}/>
        <PlaneteersContainer planeteerData={this.state.filtered} switchText={this.switchText}/>
      </div>
    );
  }

}

export default App;
