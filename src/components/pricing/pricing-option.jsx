import React from 'react'
import { ReactComponent as CheckMark } from '../../svg/checkmark.svg'
import { ReactComponent as EmptyCheckMark } from '../../svg/emptyCheckMark.svg'
import styles from './pricing-option.module.css'


const PricingOption = ({ month, price, discount, active}) => {
  
  let discountCheck = false
  let monthsCheck = false
  let priceCheck = price
  let total, discountTotal;



  const priceAfterDiscount = (price, discount) => {
    let priceWithDiscount = Number(price) * ((100 - Number(discount))/100)
    priceWithDiscount = priceWithDiscount.toFixed(2)
    return priceWithDiscount
  }
 
  const totalPrice = (month, price) => {
    total = Number(month) * Number(price)
    return total
  }

  const totalWithDiscount = (total, discount) => {
    discountTotal = Number(total) * (Number(discount)/100)
    discountTotal = discountTotal.toFixed(2)
    return discountTotal
  }
  if (month > 1) {
    monthsCheck = true
  }

  if (discount) {
    discountCheck = true
    priceCheck = priceAfterDiscount(price, discount)
    totalPrice(month, price)
    totalWithDiscount(total, discount)
  } else {
    totalPrice(month, price)
  }

  return (
    <div className={
      active ? `${styles.container} ${styles.active}` : styles.container
    }>
      <div>
        <div className={styles.innerTextContainer}>
          <p>{month} month plan</p>
          {discountCheck ? <span className={styles.discount}>Save {discount}%</span> : null}
        </div>
        <div className={styles.innerTextContainer}><h2>${priceCheck}</h2> / month</div>
        <div className={styles.innerTextContainer}>
          {discountCheck ? 
            <><span className={styles.totalWithoutDiscount}>${total}</span><span className={styles.discountTotal}>${discountTotal}</span></> 
            : monthsCheck ? `$${total}` : null
          }
          <p className={styles.innerText}>
            {monthsCheck 
            ? `billed every ${month} months`
            : 'Billed monthly'}
          </p>
        </div>
      </div>
      {active ? <CheckMark/> : <EmptyCheckMark/>}
    </div>
  )
}

export default PricingOption