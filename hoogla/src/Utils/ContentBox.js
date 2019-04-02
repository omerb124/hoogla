import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ContentBox.css';

class ContentBox extends Component {

    /**
     * 
     * @param {String} title - boxe's title 
     */

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="content_box">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row>
                            <Col md={12}>
                                <div className="box_title">
                                    <h1>{this.props.title || "אין כותרת ידידי"}</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="box_content">
                                    {this.props.content || "אין תוכן מתוק"}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </div>
        )
    }
}

export default ContentBox;