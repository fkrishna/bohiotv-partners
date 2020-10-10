import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PrivateRoute } from "components";
import App from "./app/App";
import IndexPage from "pages/IndexPage";
import LoginPage from "pages/LoginPage";
import ContactPage from "pages/ContactPage";
import UploadPage from "pages/UploadPage";
import ProfilePage from "pages/ProfilePage";

const navigation = [
  // PROFILE ROUTE
  {
    name: "profile",
    path: "/profile",
    icon: "user",
    position: "top",
    component: ProfilePage,
  },

  // UPLOAD ROUTE
  {
    name: "upload",
    icon: "upload",
    path: "/upload",
    position: "top",
    component: UploadPage,
  },

  // LEGAL ROUTE
  {
    name: "legal",
    path: "/legal",
    icon: "file-text",
    position: "bottom",
    component: UploadPage,
  },

  // SIGN OUT ROUTE
  {
    name: "logout",
    path: "/logout",
    icon: "sign-out",
    position: "bottom",
    render: () => alert("logout"),
  },
];

export default function () {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/login" exact component={LoginPage} />
          <PrivateRoute
            path="/"
            component={IndexPage}
            navigations={navigation}
          />
        </Switch>
      </App>
    </BrowserRouter>
  );
}
