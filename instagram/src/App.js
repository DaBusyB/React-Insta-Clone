import React, { Component } from 'react';

import dummyData from './dummy-data';
import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: dummyData;
    }
  }
  render() {
    return (
      <div className='appContainer'>
        <SearchBarContainer /> 
        <PostContainer />
      </div>
    );
  }
}

export default App;
