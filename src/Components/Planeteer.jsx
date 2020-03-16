import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  handleBioOrQuote = (e) => {
    // console.log('clijc')
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleDelete = (e) => {
    this.props.deleteOnePlaneteer(this.props.planeteer.id)
  }

  render() {

    // console.log(this.props.planeteer)
    let planet = this.props.planeteer
    let { name, fromUSA, born, bio, quote, pictureUrl, twiiter } = planet

    return (
      <li className="cards__item" onClick={this.handleBioOrQuote} >
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{ this.state.clicked ? quote : bio }</p>
            <div className="card__detail">
              <p>{twiiter}</p>
              <p>Age: {2020 - born}</p>
              <p>{fromUSA ? "USA-Based" : "Work-Overseas"}</p>
            </div>
            <button className="remove-card" onClick={this.handleDelete} >X</button>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;


// {
//   "id": 1,
//   "name": "Xiuhtezcatl Martinez",
//   "fromUSA": true,
//   "born": 2000,
//   "bio": "While Xiuhtezcatl started speaking about the environment at just age 6, he is now a 19-year-old indigenous activist, musician, and the youth director of Earth Guardians, an organization that trains youth across the world to use civic engagement and the arts to help solve environmental issues. As a hip-hop artist, Xiuhtezcatl also often uses music to convey powerful environmental messages. He is also not afraid to confront the government head-on, as he was one of the 21 plaintiffs that sued the federal government for their lack of action on climate change.",
//   "quote": "My father taught me to see the magic in everything. Growing up, magic was in the sunrise and the rainfall. In every expression of life, no matter how small. I think that that was one of the most valuable wisdom that shaped who I was as a young boy. It gave me the perspective to see what was behind the dysfunction of our society, of our broken world, our dying ecosystems and corrupt leaders.",
//   "pictureUrl": "https://160g7a3snajg2i1r662yjd5r-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/XMartinez.gif",
//   "twitter": "@xiuhtezcatl"
// }