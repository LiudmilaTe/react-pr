import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Houses: [
        {
          name: 'Hufflepuff',
          img: 'Hufflepuff.jpg'
        },
        {
          name: 'Gryffindor',
          img: 'Gryffindor.png'
        },
        {
          name: 'Slytherin',
          img: 'Slytherin.png'
        },
        {
          name: 'Ravenclaw',
          img: 'Ravenclaw.jpg'
        },
      ],
      houseName: ""
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const houseName = event.target.value;
    this.setState({
      houseName: houseName
    })
  }

  render() {
    const filteredHouses = this.state.Houses.filter(house => this.state.houseName == house.name)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hogwarts List</h2>
        </div>
        
        <input
          type="text"
          placeholder="type house"
          value={this.house}
          onChange={this.handleChange}
        />

         {filteredHouses.map(house =>
          <div>
            <p>{house.name}</p> 
            <img src={house.img} />
            </div>
          )}

          {this.state.houseName && filteredHouses.length === 0 ? 
            this.state.houseName + '? Never heard of it!' : 
            null}
         </div>

    );
  }
}

export default App;