import React from 'react';

class Planeteer extends React.Component {


  state = {
    clicked: false
  }

  handleClick = () => {
    console.log("gonna take pollution down to zero")
 
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {

    let {id, name, fromUSA, born, bio, quote, pictureUrl, twitter } = this.props.planeteerFriend

    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text" onClick={this.handleClick}>{this.state.clicked ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {(new Date().getFullYear()) - born}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
