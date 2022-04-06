import React from 'react'
import PricingOption from './pricing-option'
import Button from '../button/button'
import styles from './pricing.module.css'

const Pricing = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>Choose your plan and get <span className={styles.textSpan}>7 days free trial</span></div>
        <PricingOption
            month="6"
            price="19.99"
            discount="50"
            active
        />
        <PricingOption
            month="3"
            price="19.99"
            discount="25"
        />
        <PricingOption
            month="1"
            price="19.99"
        />
        <Button
            text="Get your plan"
        />
    </div>
  )
}

export default Pricing