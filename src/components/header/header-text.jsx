import React from 'react'
import styles from './header-text.module.css'

const HeaderText = ({ ordersNo }) => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>Over <b>{ordersNo}</b> plans ordered.</div>
        <div className={styles.textH1}>Get access to your yoga program now!</div>
    </div>
  )
}

export default HeaderText