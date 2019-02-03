/*
 * (C) 2019 Rainbow Camp
 */

import React, { Component } from 'react';
import './App.css';
import Faq from './Faq.react.js';

import { Container, Row, Col, Jumbotron, Button, Card } from 'react-bootstrap';

const logos = require.context('./images', false, /\.png$/);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>

          { this.renderWelcome() }
          { this.renderDetails() }
          { this.renderRegister() }
          { this.renderDescription() }
          { this.renderFaq() }

        </Container>
      </div>
    );
  }

  renderWelcome() {
    return (
      <Row className="show-grid center">
        <Col>
          <Jumbotron>
            <img
              className="splash"
              src={this._select(logos)}
              style={{
                maxWidth: "90%",
              }}
              alt="Rainbow Camp Logo, with the text Rainbow Camp where the 'o' has a pride flag pattern inside"
            />
            <p className="splash">A 5 day faith experience for LGBTQ Youth and Young Adults.</p>
          </Jumbotron>
        </Col>
      </Row>
    );
  }

  renderDetails() {
    const height = 140;
    return (
      <Row className="show-grid center" style={{height: height, marginBottom: 25}}>
        <Col sm={12} md={6} >
          {this.renderDates(height)}
        </Col>
        <Col sm={12} md={6}>
          {this.renderLocation(height)}
        </Col>
      </Row>
    );
  }

  renderDates(height) {
    const start = new Date(2019, 5, 24);
    const end = new Date(2019, 5, 28);
    const today = new Date();
    return (
      <Card style={{height: height}}>
        <Card.Body style={{fontSize: 36, height: 98}}>
          {this.renderDateMessage(start, end, today)}
        </Card.Body>
      </Card>
    );
  }

  renderDateMessage(start, end, today) {
    return today < end ?
      `${this._getMonth(start)} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}` :
      `Check back later for ${end.getFullYear() + 1}`;
  }

  renderLocation(height) {
    return (
      <Card style={{height: height}}>
        <Card.Body>
          <a href="http://opretreat.org">
            <img
              src="http://opretreat.org/wp-content/uploads/2017/01/cropped-OP-WEb-Logo-68pxhigh.png"
              alt="Ocean Park Retreat Center"
              style={{
                width: "100%",
              }}
            />
          </a>
        </Card.Body>
      </Card>
    );
  }

  renderRegister() {
    return (
      <Row className="show-grid center">
        <Col>
          <Jumbotron>
            <Button variant="primary" style={{fontSize: 48}}>
              Register
            </Button>
          </Jumbotron>
        </Col>
      </Row>
    );
  }

  renderDescription() {
    return (
      <Row className="show-grid description">
        <Col>
          <Card>
            <Card.Body style={{textIndent: 35}}>
              <div>Come experience a safe space where LGBTQ+ youth you can be in community with one another other LGBTQ+ youth, explore your spiritual life, and leave knowing that you are of sacred worth, loved by God, and you are important in the body of Christ.</div>
              <div>Build friendships, learn about one another and yourself, find your place in the world, all while kayaking, wave jumping in the ocean, dancing, singing, creating crafts, testing your archery skills, rock wall climbing, zip lining, worshipping in a community, diving into deep discussions with small groups, and enjoying the beautiful smell of the outdoors.</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }

  renderFaq() {
    return (
      <Row className="show-grid equal">
        <Faq
          question="Are there minimum age requirements to register for the camp?"
          answer="All campers must be between the ages of 12 and 21 years old. For group discussions and sleeping times, campers will be in cabins designated by age."
        />
        <Faq
          question="What are my transportation options for getting to and from the camp?"
          answer="You are responsible for getting yourself to camp. If you need a ride, we can help you find a carpool option. If you drive your own vehicle, there is parking available. High school aged drivers will need to turn their keys into leaders for their safety and the keys will be returned at the end of the camp. College aged drivers can turn their keys in for safe keeping or keep them in their posession, but must understand that driving other youth during camp is strictly forbidden."
        />
        <Faq
          question="What should I bring to camp?"
          answer="You will be sent a list of items to bring to camp as we get closer to the dates. There will be a camp store with various clothing and items for sale. You can bring cash or a credit card to purchase items."
        />
        <Faq
          question="What can't I bring into the camp?"
          answer="We advise not bringing expensive electronics as they can get lost, damaged, or possibly stolen, but the main reason we encourage you not to bring them is so that you fully participate in all the group activities."
        />
      </Row>
    );
  }

  _getMonth(date) {
    return date.toLocaleString('en-us', { month: 'long' });
  }

  _select(context) {
    const key = context.keys()[this._randomWithin(0, context.keys().length-1)];
    return context(key);
  }

  _randomWithin(floor, ceiling) {
    return floor + Math.floor((Math.random() * (ceiling - floor)) + 1)
  }
}

export default App;
