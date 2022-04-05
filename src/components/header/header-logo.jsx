import React from 'react'
import styles from './header-logo.module.css'
import { ReactComponent as Logo } from '../../svg/logo.svg'


const HeaderLogo = () => {
  return (
    <div className={styles.container}>
        <Logo/>
    </div>
  )
}

export default HeaderLogo