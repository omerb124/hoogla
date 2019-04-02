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
import Alert from 'react-bootstrap/Alert';
import Footer from '../Footer/Footer.js';
import './MainPage.css';

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: []
        };

        this.addNewPersonForm = this.addNewPersonForm.bind(this);
        this.addNewPerson = this.addNewPerson.bind(this);
        this.addIlutz = this.addIlutz.bind(this);
        this.showAlert = this.showAlert.bind(this);
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

        let personType = document.getElementsByName("person_type")[0].value === "cyber" ? "סייבר" : "הערכה";
        let currentPersonsList = this.state.persons;
        let uniqueId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        currentPersonsList.push({ uid: uniqueId, name: personName, type: personType, problems: [] });

        this.setState({
            persons: currentPersonsList,
            currentAlert: null
        });
        return;
    };

    /**
     * Adding ilutz to person
     * @param {String} personId - given id of person to add Ilutz to
     */
    addIlutz = (personId) => {
        console.log(personId);
        let newIlutzDate = document.getElementById("new_ilutz_" + personId).value;
        if (newIlutzDate) {
            let persons = this.state.persons;
            let changed = false;

            for (let i = 0; i < persons.length; i++) {
                let person = persons[i];
                console.log(person);
                if (person.uid === personId) {
                    console.log(person.problems);
                    console.log(newIlutzDate);
                    if (person.problems.indexOf(newIlutzDate) === -1) {
                        // Push new Ilutz to problems list of the person
                        person.problems.push(newIlutzDate);
                        changed = true;
                    }
                }
            }

            if (changed) {
                this.setState({
                    persons: persons
                }, () => {
                    this.setState({
                        currentAlert: {
                            variant: 'success',
                            content: 'האילוץ נוסף בהצלחה!'
                        }
                    });
                });
            }
            else {
                this.setState({
                    currentAlert: {
                        variant: 'info',
                        content: 'כלום לא השתנה.'
                    }
                });
                console.log("Nothing changed");
            }
        }
    };

    addNewPersonForm = () => {
        return (
            <Form
                id="add_new_person_form"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.addNewPerson();
                    document.getElementsByName("person_name")[0].value = "";
                    return false;
                }}>

                <Form.Row>
                    <Col md={5}>
                        <Form.Control placeholder="שם מלא" name="person_name" />
                    </Col>
                    <Col md={5}>
                        <Form.Control as="select" name="person_type">
                            <option value="haaracha">הערכה</option>
                            <option value="cyber">סייבר</option>
                           
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

    showAlert = () => {
        if (this.state.currentAlert) {
            return (
                <Alert dismissible variant={this.state.currentAlert.variant}>
                    {this.state.currentAlert.content}
                </Alert>
            );
        }
    };

    render() {
        let content =
            <div>
                {this.addNewPersonForm()}
                <PersonsTable
                    persons={this.state.persons}
                    addIlutz={this.addIlutz} />

            </div>;

        let random = new Date().toLocaleTimeString();
        return (
            <div id="MainPage">
                {this.showAlert()}
                <ContentBox
                    title="הוסף תורנים"
                    content={content}
                    k={random}
                />
                <div style={{"textAlign" : "center"}}>
                    <Button variant="outline-success">צור לוח תורנים</Button>
                </div>
            </div>

        );
    }
}


export default MainPage;