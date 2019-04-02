import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class PersonRow extends Component {

    constructor(props) {
        super(props);

        // אילוצים
        this.state = {
            problems: []
        };

    }

    

    render = () => {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.type}</td>
                <td>
                    <InputGroup>

                        <FormControl placeholder="בחר תאריך" aria-describedby="basic-addon1" type="date" id={`new_ilutz_${this.props.id}`} width="70%" />
                        <InputGroup.Prepend>
                            <Button variant="primary" onClick={() => { this.props.addIlutz(this.props.id); }}>הוסף</Button>
                        </InputGroup.Prepend>
                    </InputGroup>
                </td>
                <td><Button variant="outline-success" id={`iluzim_${this.props.id}`}>אילוצים</Button>
                    <Button variant="outline-danger" id={`delete_${this.props.id}`}>מחק</Button></td>
            </tr>
        )
    };
}

export default PersonRow;