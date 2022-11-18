import React from 'react';
import styles from './CoolBox.module.css';

export default function CoolBox() {
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>The coolest box in the world!</h2>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  );
}
