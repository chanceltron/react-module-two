import React from 'react';
import './InputBase.css';
import { CARD, CARDICON } from '../constants';

export default function InputBase({ errorM, error, cardType, isCard, ...props }) {
  return (
    <label>
      <input className='input-root' {...props} />
      {errorM && <div className='error'>{errorM}</div>}
      {(!error || !error.cardError) && isCard && CARD.includes(cardType) && <img src={CARDICON[cardType]} alt='card' />}
    </label>
  );
}
