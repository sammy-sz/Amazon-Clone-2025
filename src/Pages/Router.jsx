import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Landing/Landing'
import Payment from '../Pages/Payment/Payment'
import Orders from '../Pages/Orders/Orders'
import Cart from '../Pages/Cart/Cart'
import SignIn from '../Pages/Auth/SignUp'
import Results from './Results/Results'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing