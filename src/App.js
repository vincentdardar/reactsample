import React, { Component } from 'react';

import './App.css';
import {Header, Container} from "semantic-ui-react";

import TabBarContainer from "features/tabs/TabBarContainer";
import Pilots from "features/pilots/Pilots";
import Mechs from "features/mechs/Mechs";
import UnitInfo from "features/unitinfo/UnitInfo";
import UnitOrganization from "features/unitOrganization/UnitOrganization";









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
