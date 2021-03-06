import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class RainbowCard extends Component {
  options = ['red','blue','yellow','green','orange','purple','brown','black','rbg(58,222,243)','rgb(265,167,198)'];

  render() {
    return <Card
      {...this.props}
      style={{
        ...this.props.style,
        border: 'none',
      }}
    />;
  }
}

export default RainbowCard;
