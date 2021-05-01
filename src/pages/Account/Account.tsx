import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  NavLink,
  Redirect,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fetchUserInfo } from "../../redux/thunks/user-thunks";
import { fetchPhones } from "../../redux/thunks/phone-thunks";
import { fetchAllUsers } from "../../redux/thunks/admin-thunks";
import PersonalOrdersList from "./PersonalOrdersList/PersonalOrdersList";
import ChangePassword from "./ChangePassword/ChangePassword";
import PersonalData from "./PersonalData/PersonalData";
import AccountItem from "./AccountItem";
//import AddPhone from "./AddPhone/AddPhone";
import OrdersList from "./OrdersList/OrdersList";
import UsersList from "./UsersList/UsersLists";
import PhoneList from "./PhoneList/PhoneList";
import ManageUser from "./ManageUser/ManageUser";
//import EditPhone from "./EditPhone/EditPhone";
import ManageUserOrder from "./ManageUserOrder/ManageUserOrder";
import "./Account.css";
import AddPhone from "./AddPhone/AddPhone";

const Account: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchPhones());
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div className="account-container container">
      <div className="row mt-5">
        <div className="col-md-2">
          <h4>
            <FontAwesomeIcon className="mr-2" icon={faUser} />
            My Account
          </h4>
          <NavLink
            to={"/account/user/info"}
            className="account-sidebar-link nav-link"
            activeClassName="is-active"
          >
            Personal data
          </NavLink>
          {localStorage.getItem("userRole") === "ADMIN" ? (
            <>
              <NavLink
                to={"/account/admin/add"}
                className="account-sidebar-link nav-link"
                activeClassName="is-active"
              >
                Add phone
              </NavLink>
              <NavLink
                to={"/account/admin/phones"}
                className="account-sidebar-link nav-link"
                activeClassName="is-active"
              >
                List of phones
              </NavLink>
              <NavLink
                to={"/account/admin/orders"}
                className="account-sidebar-link nav-link"
                activeClassName="is-active"
              >
                List of all orders
              </NavLink>
              <NavLink
                to={"/account/admin/users"}
                className="account-sidebar-link nav-link"
                activeClassName="is-active"
              >
                List of all users
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={"/account/user/edit"}
                className="account-sidebar-link nav-link"
                activeClassName="is-active"
              >
                Change password
              </NavLink>
              <NavLink
                to={"/account/user/orders"}
                className="account-sidebar-link nav-link"
                activeClassName="is-active"
              >
                List of orders
              </NavLink>
            </>
          )}
        </div>
        <div className="col-md-10">
          <Route exact path="/account" component={() => <AccountItem />} />
          <Route path="/account/user/info" component={() => <PersonalData />} />
          <Route
            path="/account/user/edit"
            component={() => <ChangePassword />}
          />
          <Route
            exact
            path="/account/user/orders"
            component={() => <PersonalOrdersList />}
          />
          <Route
            exact
            path="/account/user/orders/:id"
            component={() => <ManageUserOrder />}
          />
          {localStorage.getItem("userRole") === "ADMIN" ? (
            <>
              <Route
                exact
                path="/account/admin/phones"
                component={() => <PhoneList />}
              />
              <Route
                exact
                path="/account/admin/add"
                component={() => <AddPhone />}
              />
              <Route
                exact
                path="/account/admin/orders"
                component={() => <OrdersList />}
              />
              <Route
                exact
                path="/account/admin/users"
                component={() => <UsersList />}
              />
              <Route
                exact
                path="/account/admin/users/:id"
                component={(props: RouteComponentProps<{ id: string }>) => (
                  <ManageUser {...props} />
                )}
              />
            </>
          ) : (
            <Redirect to={"/account"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
