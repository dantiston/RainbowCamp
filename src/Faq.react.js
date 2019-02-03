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
              <span><b>Question:&nbsp;</b></span>
              <span>{this.props.question}</span>
            </div>
            <div>
              <span><b>Answer:&nbsp;</b></span>
              <span>{this.props.answer}</span>
            </div>
          </Card.Body>
        </RainbowCard>
      </Col>
    )
  }

}

export default Faq;
