import React from 'react';
import s from './CoolBox.module.css';

export default function CoolBox() {
  return (
    <div className={`header ${s.box}`}>
      <h2 className={s.headerMain}>The coolest box in the world!</h2>
      <p className={s.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  );
}
