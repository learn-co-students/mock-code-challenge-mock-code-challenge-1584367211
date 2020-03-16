import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {


  state = {
    data: []
  }
  
  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then((planeteerObjs) => {
        this.setState({
          data: planeteerObjs
        })
      })
  }


  render(){
    
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer dataObj={this.state.data}/>
      </div>
    );
  }

}

export default App;
