import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './PersonsTable.css';
import PersonRow from './PersonRow.js';

class PersonsTable extends Component {

    constructor(props) {
        super(props);

        this.generateList = this.generateList.bind(this);
    }

    generateList = () => {
        let list = [];
        for (let i = 0; i < this.props.persons.length; i++) {
            list.push(
                <PersonRow
                    addIlutz={this.props.addIlutz}
                    id={this.props.persons[i].uid}
                    key={i}
                    name={this.props.persons[i].name}
                    type={this.props.persons[i].type}
                />
            );
        }

        return list;
    };


    render = () => {
        let list = this.generateList();

        return (
            <div id="persons_table_container">
                <Table striped bordered hover id="persons_table">
                    <thead>
                        <tr>
                            <th>שם מלא</th>
                            <th>מפלג</th>
                            <td width="20%">אילוצים</td>
                            <th width="20%">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </Table>
            </div>
        )
    };
}

export default PersonsTable;