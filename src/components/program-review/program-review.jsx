import React from 'react'
import styles from './program-review.module.css'

const ProgramReview = ({ svg, title, description}) => {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.iconContainer}>
                {svg}
            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProgramReview