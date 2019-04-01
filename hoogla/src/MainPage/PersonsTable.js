import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './PersonsTable.css';
import PersonRow from './PersonRow.js';

class PersonsTable extends Component{

    constructor(props){
        super(props);
        this.persons = props.persons;

        this.generateList = this.generateList.bind(this);
    }

    generateList = () => {
        let list = [];
        for(let i = 0; i < this.persons.length; i++){
            list.push(
                <PersonRow 
                    name={this.persons[i].name}
                    type={this.persons[i].type}
                />
            );
        }
        console.log(list);

        return list;
    };


    render = () => {
        console.log("bbb");
        let list = this.generateList();

        return(
            <Table striped bordered hover id="persons_table" height="300px">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>שם מלא</th>
                        <th>מפלג</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>
        )
    };
}

export default PersonsTable;