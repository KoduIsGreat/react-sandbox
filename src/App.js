import React, { Component } from 'react';

import SimpleExample from './components/SimpleExample'
import LayerControl from './components/LayersControl'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container" className="App">
        <LayerControl/>
      </div>
      
    );
  }
}

export default App;
