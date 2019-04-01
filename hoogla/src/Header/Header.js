import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Header.css';

/**
 * Header File
 */


class Header extends Component{
    
    render() {

        let d = new Date().toLocaleTimeString();
        return(
            <Container fluid d={d}>
                <Row>
                    <Col md={12} className="p-0">
                        <div id="menu">
                         <h1>מערכת התורנויות של בובו</h1>   
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;