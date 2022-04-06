import React from 'react'
import styles from './preview.module.css'

import ScreenShot1 from '../../images/screenShot1.jpg'
import ScreenShot2 from '../../images/screenShot2.jpg'

const Preview = () => {
  return (
    <div className={styles.container}>
        <div className={styles.accent}></div>
        <div className={styles.image1}>
            <img src={ScreenShot1} alt="screenShot1"></img>
        </div>
        <div className={styles.image2}>
        <img src={ScreenShot2} alt="screenShot2"></img>
        </div>
    </div>
  )
}

export default Preview