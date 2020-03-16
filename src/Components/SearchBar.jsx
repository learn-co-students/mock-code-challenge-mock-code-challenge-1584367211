import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" onChange={event=>this.props.search(event)}/>
      </div>
    );
  }

}

export default SearchBar;
