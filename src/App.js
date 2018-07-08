import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loading from './Loading';
import Main from './Main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };

    this.onLoadingFinished = this.onLoadingFinished.bind(this);
  }

  onLoadingFinished() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <TransitionGroup className="App">
        <CSSTransition
          key={ this.state.loaded }
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}>
            { this.state.loaded
              ? <Main />
              : <Loading onLoadingFinished={ this.onLoadingFinished } /> }
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default App;
