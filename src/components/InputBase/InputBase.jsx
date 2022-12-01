import React from 'react';
import './InputBase.css';

export default function InputBase(props) {
  return (
    <label>
      <input className='input-root' {...props} />
    </label>
  );
}
