import React from 'react';

class SearchBar extends React.Component {

  handleChange = (evt) => {
    this.props.handleSearch(evt.target.value)
  }

  render() {
    return (
      <div className="search">
       <input value={this.props.search} onChange={this.handleChange} type="text" className="searchTerm" placeholder="Who would you like to search for?"/>
      </div>
    );
  }

}

export default SearchBar;
