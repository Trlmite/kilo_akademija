import React from 'react'
import styles from './button.module.css'

const Button = ({ text }) => {
  return (
    <div>
      <div className={styles.button}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Button