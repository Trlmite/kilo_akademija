import React from 'react';
import styles from './header-discount.module.css';
import { ReactComponent as Tag } from '../../svg/tag.svg';


const HeaderDiscount = () => {
  return (
    <>
      <div className={styles.container}>
        <Tag/>
        <p className={styles.text}><span className={styles.span}>50%</span> discount only valid for <span className={styles.span}>00:15:49</span></p>
      </div>
    </>
  );
}

export default HeaderDiscount;