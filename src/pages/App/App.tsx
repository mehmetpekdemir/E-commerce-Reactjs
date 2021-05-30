import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "../Menu/Menu";
import Contacts from "../Contacts/Contacts";
import Footer from "../../component/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../component/NavBar/NavBar";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Account from "../Account/Account";
import Order from "../Order/Order";
import OrderFinalize from "../Order/OrderFinalize/OrderFinalize";
import Cart from "../Cart/Cart";
import Phone from "../Phone/Phone";
import PhonePriceList from "../PhonePriceList/PhonePriceList";

const App: FC = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/product/:id" component={Phone} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/order/finalize" component={OrderFinalize} />
        <Route exact path="/products/price" component={PhonePriceList} />
        <Route
          path="/account"
          render={() =>
            localStorage.getItem("token") ? (
              <Route component={Account} />
            ) : (
              <Route component={HomePage} />
            )
          }
        />
        <Route path="*" component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
