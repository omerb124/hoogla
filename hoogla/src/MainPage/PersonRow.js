import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class PersonRow extends Component{

    constructor(props){
        super(props);
        
        // ID
        this.personId = props.id || null;

        // אילוצים
        this.problems = props.problems || [];

        // Full name
        this.name = props.name || "אין שם";

        // @var {Boolean} - HaHarcha is true/ cyber is false
        this.type = props.type || true;
    }

    render = () => {
        return (
           <tr>
               <td>{this.name}</td>
               <td>{this.type ? "הערכה" : "סייבר"}</td>
               <td><Button variant="outline-success" id={`iluzim_${this.personId}`}>אילוצים</Button></td>
               <td><Button variant="outline-danger" id={`delete_${this.personId}`}>מחק</Button></td> 
           </tr>
        )
    };
}

export default PersonRow;