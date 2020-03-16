import React from 'react';

class SearchBar extends React.Component {

  //this must be a controlled compononent
  //parent must past down the function to accept search term
  //this class must pass search term back up
  handleText = (e) => {
    //this will handle text and pass back up through this.props
    this.props.getFilteredPlaneteers(e.target.value)
  }

  
  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" onChange={this.handleText}/>
      </div>
    );
  }

}

export default SearchBar;
