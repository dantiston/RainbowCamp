import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Jumbotron, Button, Panel } from 'react-bootstrap';

const logos = require.context('./images', false, /\.png$/);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>

          { this.renderWelcome() }
          { this.renderDetails() }
          { this.renderRegister() }

        </Grid>
      </div>
    );
  }

  renderWelcome() {
    return (
      <Row className="show-grid">
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
    return (
      <Row className="show-grid">
        <Col sm={12} md={6}>
          {this.renderDates()}
        </Col>
        <Col sm={12} md={6}>
          {this.renderLocation()}
        </Col>
      </Row>
    );
  }

  renderDates() {
    const start = new Date(2019, 5, 24);
    const end = new Date(2019, 5, 28);
    const today = new Date();
    return (
      <Panel>
        <Panel.Body style={{fontSize: 36, height: 98}}>
          {this.renderDateMessage(start, end, today)}
        </Panel.Body>
      </Panel>
    );
  }

  renderDateMessage(start, end, today) {
    return today < end ?
      `${this._getMonth(start)} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}` :
      `Check back later for ${end.getFullYear() + 1}`;
  }

  renderLocation() {
    return (
      <Panel>
        <Panel.Body>
          <a href="http://opretreat.org">
            <img
              src="http://opretreat.org/wp-content/uploads/2017/01/cropped-OP-WEb-Logo-68pxhigh.png"
              alt="Ocean Park Retreat Center"
              style={{
                width: "100%",
              }}
            />
          </a>
        </Panel.Body>
      </Panel>
    );
  }

  renderRegister() {
    return (
      <Row className="show-grid">
        <Col>
          <Jumbotron>
            <Button bsStyle="primary" bsSize="large" style={{fontSize: 48}}>
              Register
            </Button>
          </Jumbotron>
        </Col>
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
