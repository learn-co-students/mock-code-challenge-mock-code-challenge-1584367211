import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
    this.props.handleSearchTerm(e.target.value)
    // console.log(e.target.value)
  }

  render() {
    return (
      <div className="search" >
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" value={this.props.searchTerm} onChange={this.handleChange} />
      </div>
    );
  }

}

export default SearchBar;
