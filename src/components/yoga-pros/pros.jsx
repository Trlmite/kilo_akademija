import React from 'react'
import styles from './pros.module.css'
import { ReactComponent as YogaCon } from '../../svg/yogaCon.svg'

const YogaPros = ({ content }) => {
  return (
    <div>
        <div className={styles.innerContainer}>
            <YogaCon/>
            <div className={styles.text}>{content}</div>
        </div>
    </div>
  )
}

export default YogaPros