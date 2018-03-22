import React from "react";
import {Form, Dropdown, Segment} from "semantic-ui-react";


//const UnitInfo = () => <div>Unit Info content234</div>;


const Airports = [
    {value : "EWR", text : "Newwark International"},
    {value : "SFO", text : "Sanfranciso International "},
    {value : "JFK", text : "John F Kennedy"},
    {value : "LGA", text : "La Guardia Airport"},
    {value : "AUS", text : "AUstin international"},
];


const UnitInfo = () => (

    <Segment attached="bottom">
        <Form size="large">
            <Form.Field name="name" width={6} >
                <label>Airport Code</label>
                <input placeholder="Name" />
            </Form.Field>
            <Form.Field name="fullname" width={6}>
                <label>Full Airport Name</label>
                <Dropdown
                    selection
                    options={Airports}
                />
            </Form.Field>
        </Form>
    </Segment>


);
export default UnitInfo;
