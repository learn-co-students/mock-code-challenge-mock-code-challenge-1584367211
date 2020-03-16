import React from 'react';

class SearchBar extends React.Component {

  handleChange = (event) => {
    this.props.handleFilterTerm(event.target.value)
  }

  render() {
    return (
      <div className="search">
       <input 
        type="text" 
        className="searchTerm" 
        placeholder="Who would you like to search for?"
        value={this.props.filterTerm}
        onChange={this.handleChange}
      />
      </div>
    );
  }

}

export default SearchBar;
