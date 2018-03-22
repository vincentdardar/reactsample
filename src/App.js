import React, { Component } from 'react';

import './App.css';
import {Header, Container} from "semantic-ui-react";

import TabBarContainer from "./features/TabBarContainer";



class App extends Component {
  render() {


      const tabs = [
          {name : "airportInfo", label : "Airport Info"},
          {name : "pilots", label : "Pilots"},
          {name : "mechs", label : "Mechs"},
          {name : "unitOrganization", label : "Unit Organization"}
      ];



    return (
      <div className="App">
        <header className="App-header">
            <Header inverted as="h1"> Semantic ORM Demo: Airport Pilots to Mechs Management</Header>
        </header>
        <Container>
            <TabBarContainer tabs={tabs} size="massive"/>
        </Container>
      </div>
    );
  }
}

export default App;
