import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchVideoBar from './SearchVideoBar';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail';
import youtube from './GoogleVideoAPI';


class App extends React.Component {
    state = {videos: [], selectedVideo: null};


    componentDidMount() {
      this.onTermSubmit('foxes');
    }

    onTermSubmit =  async term => {
      const response = await youtube.get('/search', {params: {q: term}});
    
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    }

    onVideoSelect = (video) => {
      this.setState({selectedVideo: video});
    }

  render(){ 
    return(
      <div className="ui container">
        <SearchVideoBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
       
      </div>
      
    )
  }
  
}

export default App;