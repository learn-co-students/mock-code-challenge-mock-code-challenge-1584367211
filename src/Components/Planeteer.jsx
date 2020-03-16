import React from 'react';

class Planeteer extends React.Component {

  


  render() {
    console.log(this.props)
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.name}</div>
            <p className="card__text">{this.props.planeteer.name}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>Age: {"RENDER THE AGE OF THE PERSON"}</p>
              <p>{"CONDITIONALLY RENDER WHETHER THE PERSON IS USA-BASED OR WORKING OVERSEAS"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
