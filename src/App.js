import React, { Component } from 'react';

import './App.css';
import {Header} from "semantic-ui-react";


import SampleComponent from "./SampleComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Header inverted as="h1">Project ReactSample Semantic ORM Demo1234</Header>
        </header>
        <SampleComponent/>
      </div>
    );
  }
}

export default App;
