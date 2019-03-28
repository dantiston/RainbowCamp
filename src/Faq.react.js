/*
 * (C) 2019 Rainbow Camp
 */

import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import RainbowCard from './RainbowCard.react.js';
import './App.css';

class Faq extends Component {
  render() {
    return (
      <Col sm={12} md={6}>
        <RainbowCard>
          <Card.Body className="faq">
            <div>
              <p><b>Question:&nbsp;</b></p>
              <p>{this.props.question}</p>
            </div>
            <div>
              <p><b>Answer:&nbsp;</b></p>
              <p>{this.props.answer}</p>
            </div>
          </Card.Body>
        </RainbowCard>
      </Col>
    )
  }

}

export default Faq;
