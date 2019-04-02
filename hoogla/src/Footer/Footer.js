import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Footer.css';

class Footer extends Component {

    constructor() {
        super();

    }

    render() {
        return (
                <Row id="footer">
                    <Col>
                        <span>
                            כל הזכויות שמורות לבובו.
                        </span>
                    </Col>
                </Row>
        );
    }
}

export default Footer;