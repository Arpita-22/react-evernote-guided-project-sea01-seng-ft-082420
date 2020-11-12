import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import { animations } from 'react-animation'

const style = {
  animation: animations.popIn
}


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header style={style} />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
