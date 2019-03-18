import React, { Component } from 'react';

import dummyData from './dummy-data';
import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      igData: dummyData,
    };
  }
  render() {
    return (
      <div className='appContainer'>
        <SearchBarContainer /> 

        <div>
          {this.state.igData.map(eaItem =>   
            <PostContainer 
              eaPost={eaItem} 
              key={eaItem.username} 
            /> 
          )}
        </div>
      </div>
    );
  }
}

export default App;
