import React from 'react';

class Planeteer extends React.Component {


  bornInUs = () => {

    if(this.props.planeteerObj.bornInUs) {
      console.log("hello")
    } else {
      console.log("hello2")
    }
    // this.props.planeteerObj.bornInUs ? "Ok" : "No"
  }


  render() {
    // console.log(this.props.planeteerObj.name)
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteerObj.pictureUrl} alt={this.props.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteerObj.name}</div>
            <p className="card__text">{"CONDITIONALLY RENDER BIO OR QUOTE"}</p>
            <div className="card__detail">
              <p>{"RENDER TWITTER HANDLE"}</p>
              <p>Age: {"RENDER THE AGE OF THE PERSON"}</p>
              <p>{this.props.bornInUs}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
