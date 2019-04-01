import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header.js';
import ContentBox from '../Utils/ContentBox.js';
import PersonsTable from './PersonsTable.js';
import PersonRow from './PersonRow.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './MainPage.css';

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: []
        };

        this.addNewPersonForm = this.addNewPersonForm.bind(this);
        this.addNewPerson = this.addNewPerson.bind(this);
    }

    /** 
     * Adding the new person input to table and current state
     */
    addNewPerson = () => {
        let personName = document.getElementsByName("person_name")[0].value;
        if (!personName || personName.length === 0) {
            alert("לא מילאת את כל השדות.");
            return;
        }

        let personType = document.getElementsByName("person_type")[0].value;
        let currentPersonsList = this.state.persons;
        currentPersonsList.push({ name: personName, type: personType, iluzim: [] });

        this.setState({
            persons: currentPersonsList
        });
        return;
    };

    addNewPersonForm = () => {
        return (
            <Form id="add_new_person_form">
                <Form.Row>
                    <Col md={5}>
                        <Form.Control placeholder="שם מלא" name="person_name" />
                    </Col>
                    <Col md={5}>
                        <Form.Control as="select" name="person_type">
                            <option value="cyber">סייבר</option>
                            <option value="haaracha">הערכה</option>
                        </Form.Control>
                    </Col>
                    <Col md={2}>
                        <Button variant="primary" onClick={() => { this.addNewPerson() }} block>
                            הוסף
                    </Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    };


    render() {
        let content =
            <div>
                {this.addNewPersonForm()}
                <PersonsTable persons={this.state.persons} />
            </div>;

        let random = new Date().toLocaleTimeString();
        return (

            <div id="MainPage">
                <Header />
                <ContentBox
                    title="בחר תורנים"
                    content={content}
                    k={random}
                />
            </div>


        );
    }
}


export default MainPage;