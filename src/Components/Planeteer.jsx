import React from 'react';

class Planeteer extends React.Component {

 

 render() {
    // console.log(this.props.planet);
    // inital render show bio
    // img onClick change bio to qoute
    let {name, fromUSA, born, bio, qoute, pictureUrl, twitter} = this.props.planet;
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image"/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text"> {bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {2020 - born}</p>
              <p>{fromUSA ? 'USA-based' : 'Working Overseas'}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;


