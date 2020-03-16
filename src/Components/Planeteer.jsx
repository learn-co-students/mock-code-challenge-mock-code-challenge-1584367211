import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  
  GonnaFailClickEvent = (event) => {
      this.setState({
        clicked: true
      })
    }

    changeQuote = () => this.state.clicked ? 'quote': 'bio'
  render() {
    let {name, twitter, bio, quote, pictureUrl, fromUSA, born} = this.props.ikeepMyplasticsAndCompostablesTogether
    let clicheQuote = this.changeQuote()
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image"  />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text" onClick={this.props.ikeepMyplasticsAndCompostablesTogether[clicheQuote]}> {bio}</p>
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
