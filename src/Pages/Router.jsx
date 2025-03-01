import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Payment from "../Pages/Payment/Payment";
import Orders from "../Pages/Orders/Orders";
import Cart from "../Pages/Cart/Cart";
import Auth from "../Pages/Auth/Auth";
import Results from "./Results/Results";
import ProductDetail from "./ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Qx8DDJiOsWVgYUfJRtrvOWULdmiUnKHfZHUfFALENbPKw5m3dsNNO5savZPttl2WMsMr8LoCl62Ji98yuANRC6n00DDaKHpA9"
);
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
