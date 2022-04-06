import React from 'react'
import PricingOption from './pricing-option'
import Button from '../button/button'
import { ReactComponent as Payments } from '../../svg/payments.svg'
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
      <p className={styles.textSmall}>After 7 days free trial subscription payment is automatically charged from your account unless it is canceled at least 24 hours before the end of the trial period.</p>
      <p className={styles.textSmall}>By choosing a payment method you agree to the <span className={styles.textSmallSecondary}>T&Cs</span> and <span className={styles.textSmallSecondary}>Privacy Policy</span></p>
      <div className={styles.image}><Payments /></div>
    </div>
  )
}

export default Pricing