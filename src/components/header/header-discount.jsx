import React from 'react';
import styles from './header-discount.module.css';
import { ReactComponent as Tag } from '../../svg/tag.svg';


const HeaderDiscount = ({discount, timeLeft}) => {
  return (
    <>
      <div className={styles.container}>
        <Tag/>
        <p className={styles.text}><span className={styles.span}>{discount}%</span> discount only valid for <span className={styles.span}>{timeLeft}</span></p>
      </div>
    </>
  );
}

export default HeaderDiscount;