import React from 'react';

class Planeteer extends React.Component {
  state = {
    isFromUsa: true,
    quoteShows: true
  }
  
  whereYouLocated = () => {
    return this.props.planeteer.fromUSA ? "USA-Based" : "Working Overseas" 
  }
  
  handleImgClick = () => {
    this.setState({
      quoteShows: !this.state.quoteShows
    })
  }
  showQuoteOrBio = () => {
  return this.state.quoteShows ? this.props.planeteer.bio : this.props.planeteer.quote
  }
  
  
  date = new Date()
  year = this.date.getFullYear()
  
  
  //
  render() {
    let {name, fromUSA, born, bio, quote, pictureUrl, twitter }=this.props.planeteer
    
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.handleImgClick} />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
    <p>Age: {this.year - born}</p>
              <div>
              <p>{this.showQuoteOrBio()}</p>
              </div>
             
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
