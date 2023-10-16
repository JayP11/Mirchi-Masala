import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, NavbarHome } from "./components";

import {
  Home,
  About,
  Cart,
  Checkout,
  Products,
  SingleProduct,
  Error,
  PrivateRoute,
  ContactUs,
  AuthWrapper,
  Wishlist,
  MyProfile,
  PrivacyPolicy,
  TermsCondition,
  ShippingDeliveryPolicy,
} from "./pages";
import CancellationRefund from "./pages/CancellationRefund";

function App() {
  return (
    <AuthWrapper>
      <Router basename={"/mm"}>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <NavbarHome />
            <Home />
          </Route>
          {/* <Route>
          <Navbar /> */}
          <Route exact path="/about">
            <Navbar />
            <About />
          </Route>
          <Route exact path="/contactus">
            <Navbar />
            <ContactUs />
          </Route>
          <Route exact path="/cart">
            <Navbar />
            <Cart />
          </Route>
          <Route exact path="/wishlist">
            <Navbar />
            <Wishlist />
          </Route>
          <Route exact path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route exact path="/products">
            <Navbar />
            <Products />
          </Route>
          <PrivateRoute exact path="/MyProfile">
            <Navbar />
            <MyProfile />
          </PrivateRoute>
          <Route exact path="/PrivacyPolicy">
            <Navbar />
            <PrivacyPolicy />
          </Route>
          <Route exact path="/TermsCondition">
            <Navbar />
            <TermsCondition />
          </Route>
          <Route exact path="/CancellationRefund">
            <Navbar />
            <CancellationRefund />
          </Route>
          <Route exact path="/ShippingDeliveryPolicy">
            <Navbar />
            <ShippingDeliveryPolicy />
          </Route>
          {/* <Route exact path="/MyProfile">
            <Navbar />
            <MyProfile />
          </Route> */}
          <Route exact path="/products/:id/abc/0" children={<SingleProduct />}>
            {/* <Navbar /> */}
          </Route>
          <Route exact path="*">
            <Navbar />
            <Error />
          </Route>
          {/* </Route> */}
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
