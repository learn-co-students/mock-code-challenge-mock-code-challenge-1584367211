import React from 'react';

class Planeteer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteerObj.pictureUrl} alt={this.props.planeteerObj.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteerObj.name}</div>
            <p className="card__text">{this.props.planeteerObj.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteerObj.twitter}</p>
              <p>Age: {this.props.planeteerObj.born}</p>
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
