import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col, Jumbotron, Button, Panel } from 'react-bootstrap';

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
              src="https://via.placeholder.com/1000x300"
              style={{
                maxWidth: "90%",
              }}
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
          {today < end ?
          `${this._getMonth(start)} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}` :
          `Check back later for ${end.getFullYear() + 1}`}
        </Panel.Body>
      </Panel>
    );
  }

  renderLocation() {
    return (
      <Panel>
        <Panel.Body>
          <a href="http://opretreat.org">
            <img
              src="http://opretreat.org/wp-content/uploads/2017/01/cropped-OP-WEb-Logo-68pxhigh.png"
              alt="Ocean Park Retreat Center"
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
}

export default App;
