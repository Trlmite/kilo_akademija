import React from 'react'
import HeaderLogo from './header-logo'
import HeaderDiscount from './header-discount'
import HeaderText from './header-text'

const Header = ({ discount, timeLeft, ordersNo }) => {
  return (
    <>
      <HeaderDiscount 
        discount={discount}
        timeLeft={timeLeft}
      />
      <HeaderLogo />
      <HeaderText 
        ordersNo={ordersNo}
      />
    </>
  )
}

export default Header