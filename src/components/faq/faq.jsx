import React, { useState } from 'react'
import styles from './faq.module.css'

import { ReactComponent as ExpandMore } from '../../svg/expandMore.svg'
import { ReactComponent as ExpandLess } from '../../svg/expandLess.svg'

const FAQ = ({ title, content}) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    if (!expanded){
      setExpanded(true)
    } else {
      setExpanded(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={handleClick}>
        {title}
        {expanded ? <ExpandLess/> : <ExpandMore/> }
        </div>
      <div className={
        expanded 
        ? styles.active
        : styles.text
        }>{content}</div>
    </div>
  )
}

export default FAQ