import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './SearchBar';
import unsplash from './API/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

  state = {images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('search/photos', {
      params: {query: term}
    });
    //OR use promise instead of async .then((response) => {});
    
    this.setState({images: response.data.results});
  }

  //componentDidMount() {}


  render(){ 
    return(
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmitForm={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        
      </div>
    )
  }
  
}

export default App;
