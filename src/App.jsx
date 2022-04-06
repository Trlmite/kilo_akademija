import React from 'react';
import Header from './components/header/header';
import Pricing from './components/pricing/pricing';

const App = () => {
  return (
    <>
    <Header
      discount="50"
      timeLeft="00:05:50"
      ordersNo="52 147"
    />
    <Pricing/>
    </>
  );
}

export default App;
