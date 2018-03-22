import React, { Component } from 'react';

import './App.css';
import {Header, Container} from "semantic-ui-react";

import TabBarContainer from "./features/tabs/TabBarContainer";

const UnitInfo = () => <div>Unit Info content</div>;

const Pilots = () => <div>Pilots content</div>;

const Mechs = () => <div>Mechs content</div>;

const UnitOrganization = () => <div>Unit Organization content</div>;



class App extends Component {
  render() {

const tabs = [
    {name : "unitInfo", label : "Unit Info", component : UnitInfo,},
    {name : "pilots", label : "Pilots", component : Pilots,},
    {name : "mechs", label : "Mechs", component : Mechs,},
    {name : "unitOrganization", label : "Unit Organization", component : UnitOrganization}

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
