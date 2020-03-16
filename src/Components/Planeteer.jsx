import React from 'react';

class Planeteer extends React.Component {

  currentAge=(born)=>{
    let date = new Date();
    let year = date.getFullYear();
    return year-born
  }
  handleClick=(event)=>{
    this.props.switchText(this.props)
  }
  
  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.pictureUrl} alt={this.props.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.name}</div>
            <p className="card__text" onClick={event=>this.handleClick(event)}>{
              this.props.face === 'bio'?
              this.props.bio
              :
              this.props.quote
            
            }</p>
            <div className="card__detail">
              <p>{this.props.twitter}</p>
              <p>Age: {this.currentAge(this.props.born)}</p>
              <p>{
              this.props.fromUSA? 
              "USA-Based"
              :
              "Working Overseas"

            }</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}
Planeteer.defaultProps={
  face: "bio"
}

export default Planeteer;
