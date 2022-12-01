import React, { Component } from 'react';
import './Form.css';
import InputBase from '../InputBase/InputBase';

const INIT_CARD = { card: '', cardHolder: '', expiry: '', securityCode: '' };

export default class Form extends Component {
  constructor() {
    super();
    this.state = { cardData: INIT_CARD, maxLength: 19 };
  }

  render() {
    const inputData = [
      { label: 'Card Number', name: 'card', type: 'text' },
      { label: "Card Holder's", name: 'cardHolder', type: 'text' },
      { label: 'Expiration Date (MM/YY)', name: 'expiry', type: 'text' },
      { label: 'Security Code', name: 'securityCode', type: 'text' },
    ];
    return (
      <div>
        <h1>Add New Card</h1>
        <form action=''>
          {inputData.map((item) => (
            <InputBase
              placeholder={item.label}
              type={item.type}
              value={this.state.cardData && this.state.cardData[item.name]}
              onChange={this.handleInputData}
              autoComplete='off'
              maxLength={this.state.maxLength}
              name={item.name}
            />
          ))}
          <div className='btn-wrapper'>
            <InputBase type='submit' value='Add Card' />
          </div>
        </form>
      </div>
    );
  }
}
