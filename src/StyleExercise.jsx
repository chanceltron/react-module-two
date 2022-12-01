import React, { Component } from 'react';

export default class StyleExercise extends Component {
  containerStyle = {
    backgroundColor: '#efefef',
    color: '#000',
    padding: '.5em 1.5em',
    borderRadius: '14px',
    boxShadow: '0 4px 8px 3px rgba(0, 0, 0, 0.3)',
    textAlign: 'left',
  };

  render() {
    return (
      <div style={this.containerStyle}>
        <h1 style={{ fontSize: '55px', margin: '0.2em' }}>Captain Kickflip 🛹</h1>
        <p style={{ fontSize: '40px', margin: '0.2em' }}>
          Full-Stack <strike>Developer</strike> of Pancakes
        </p>
        <div style={{ fontSize: '40px', margin: '0.2em' }}>{'⭐️'.repeat(4)}</div>
      </div>
    );
  }
}
