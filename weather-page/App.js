import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import './App.css';
import Loader from './Loader';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = { lat: null, errorMessage: ''};

  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition (
      (position) => this.setState({lat: position.coords.latitude, errorMessage: ''}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  //componentDidUpdate() {console.log('Component is updated')}

  renderContent(){
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader  message="Accept location request" />;
  }

  render(){ 
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
  
}

export default App;