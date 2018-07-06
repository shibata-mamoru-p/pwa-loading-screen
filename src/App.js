import React, { Component } from 'react';
import Loading from './Loading';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onLoadingFinished = this.onLoadingFinished.bind(this);
  }

  onLoadingFinished() {
    console.log("LOADING DONE!");
  }

  render() {
    return (
      <div className="App">
        <Loading onLoadingFinished={ this.onLoadingFinished } />
      </div>
    );
  }
}

export default App;
