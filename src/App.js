/*
 * (C) 2019 Rainbow Camp
 * T.J. Trimble: trimblet@me.com
 */

import Faq from './Faq.react.js';
import RainbowCard from './RainbowCard.react.js';
import React, { Component } from 'react';
import Utils from './Utils.js';

import './App.css';

import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { List } from 'immutable';

const logos = require.context('./images', false, /\.png$/);

class App extends Component {

  _getStartDate() {
    return new Date(2019, 5, 24);
  }

  _getEndDate() {
    return new Date(2019, 5, 28);
  }

  _getYear() {
    return this._getStartDate().getFullYear();
  }

  _renderTOCSection(section) {
    return <div id={section.toLowerCase()} />
  }

  render() {
    return (
      <div className="App">
        <Container>

          { this.renderWelcome() }
          { this.renderDetails() }
          { this.renderTOC() }
          { this.renderRegister() }
          { this.renderDescription() }
          { this.renderFaq() }
          { this.renderContact() }

        </Container>
      </div>
    );
  }

  renderWelcome() {
    return (
      <Row className="show-grid center" style={{marginTop: 50}}>
        <Col>
          <img
            className="splash"
            src={Utils.selectFromContext(logos)}
            style={{
              maxWidth: "90%",
            }}
            alt="Rainbow Camp Logo, with the text Rainbow Camp where the 'o' has a pride flag pattern inside"
          />
        </Col>
      </Row>
    );
  }

  renderTOC() {
    return (
      <Row className="show-grid center" style={{marginBottom: 20}}>
        {['description', 'FAQ', 'contact'].map(section => {
          return (<Col>
            <a
              style={{textDecoration: 'none', textTransform: 'capitalize', color: 'black'}}
              href={`#${section.toLowerCase()}`}>
              {section}
            </a>
          </Col>);
        })}
      </Row>
    );
  }

  renderDetails() {
    const height = 140;
    return (
      <Row className="show-grid center" style={{marginBottom: 25}}>
        <Col sm={12} md={6}>
          <p className="splash">{this.renderDates(this._getStartDate(), this._getEndDate())}</p>
        </Col>
        <Col sm={12} md={6}>
          {this.renderLocation(height)}
        </Col>
      </Row>
    );
  }

  renderDates(start, end) {
    return new Date() < end ?
      <>{Utils.getMonth(start)} {start.getDate()}<sup>th</sup> to {end.getDate()}<sup>th</sup>, {start.getFullYear()}</> :
      <>Check back later for {end.getFullYear() + 1}</>;
  }

  renderLocation() {
    return (
      <RainbowCard>
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
      </RainbowCard>
    );
  }

  renderRegister() {
    return (
      <Row className="show-grid center">
        <Col>
          <Alert variant="primary" style={{fontSize: 48}} onClick={() => {}}>
            Registration Coming Soon!
          </Alert>
        </Col>
      </Row>
    );
  }

  renderDescription() {
    const paragraphs = [
      "A safe space for LGBTQ+ youth (12-21yrs) where you can be yourself without expectation. Where you can explore your spiritual life, build friendships, learn about one another and yourself, find your place in the world and leave knowing that you are of sacred worth, loved by God, and you are important in the body of Christ, all the while kayaking, hiking, making smores, and enjoying the world around you.",
      "Rainbow Camp is for LGBTQ+ youth and young adults ages 12 – 21. Join us for a week in the beautiful outdoors, surrounded by tall trees and a small walk (really) to the beach. We’ll wave jump in the Pacific Ocean, build sandcastles, play volleyball, and play games on the wonderful lawn. We’ll worship in the outdoor chapel, sing songs and hear stories around the campfire, learn about God’s unending love for us, and connect with fellow campers in small groups. Mixed into all the fun there are opportunities to go kayaking, climb a rock wall, participate in challenge course activities, archery, and of course plenty of crafting opportunities.",
      "Rainbow Camp is organized and led by LGBTQ+ Clergy and Lay leaders for LGBTQ+ youth and young adults.",
      "Camp Cost: $450 per camper (scholarships are available)",
    ];
    return (
      <>
        {this._renderTOCSection('description')}
        <Row className="show-grid description">
          <Col>
            <RainbowCard>
              <Card.Body style={{textAlign: 'justify'}}>
                {paragraphs.map(p => <p style={{marginTop: 35}}>{p}</p>)}
              </Card.Body>
            </RainbowCard>
          </Col>
        </Row>
      </>
    );
  }

  renderFaq() {
    return (
      <>
        {this._renderTOCSection('faq')}
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
            answer="You will be sent a list of items to bring to camp as we get closer to the dates. There will be a camp store with various clothing and items for sale. You can bring cash or a credit RainbowCard to purchase items."
          />
          <Faq
            question="What can't I bring into the camp?"
            answer="We advise not bringing expensive electronics as they can get lost, damaged, or possibly stolen, but the main reason we encourage you not to bring them is so that you fully participate in all the group activities."
          />
        </Row>
      </>
    );
  }

  renderContact() {
    return (
      <>
        {this._renderTOCSection('contact')}
        <Row>
          <Col>
            <RainbowCard>
              <Card.Body>
                <p>{this._getYear()} Camp Location</p>
                <p>Ocean Park Camp & Retreat Center<br/>
                   28511 Vernon Ave<br/>
                   Ocean Park, WA 98640</p>
                <a href="http://opretreat.org">opretreat.org</a>
              </Card.Body>
            </RainbowCard>
          </Col>
          <Col>
            <RainbowCard>
              <Card.Body>
                <p>{this._getYear()} Camp Sponsor</p>
                <p>Fairwood Community United Methodist Church<br/>
                   15255 SE Fairwood Blvd<br/>
                   Renton, WA 98058</p>
                <a href="http://www.fairwoodumc.org">fairwoodumc.org</a>
              </Card.Body>
            </RainbowCard>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
