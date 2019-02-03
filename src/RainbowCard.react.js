import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Utils from './Utils.js';

class RainbowCard extends Component {
  options = ['red','blue','yellow','green','orange','purple','brown','black','rbg(58,222,243)','rgb(265,167,198)'];

  render() {
    return <Card
      {...this.props}
      style={{
        ...this.props.style,
        borderColor: Utils.select(this.options)
      }}
    />;
  }
}

export default RainbowCard;
