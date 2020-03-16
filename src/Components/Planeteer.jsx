import React from 'react';

class Planeteer extends React.Component {


  render() {
    let { name, born, bio, fromUSA, quote, pictureUrl, twitter } = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img src={ pictureUrl } alt={ name } className="card__image" />
          <div className="card__content">
            <div className="card__title">{ name }</div>
            <p className="card__text">{ bio }</p>
            <div className="card__detail">
              <p>{ twitter }</p>
              <p>Age: { (new Date().getFullYear() - born) }</p>
              <p>{ fromUSA ? "USA-based" : "Working Overseas" }</p>
            </div>
            <button>x</button>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
