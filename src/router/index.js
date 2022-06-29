import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Routes } from "./routes";
import PrivateRouter from "./privateRouter";

import { NotFound, Login, Register, Posts, Users } from "./../screens";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        {/* Login Route */}

        <Route exact path={Routes.login} element={<Login />} />
        <Route exact path={Routes.home} element={<Login />} />

        {/* Register Router */}
        <Route exact path={Routes.register} element={<Register />} />

        {/* Posts Router */}
        <Route
          exact
          path={Routes.posts}
          element={
            <PrivateRouter path={Routes.posts}>
              <Posts />
            </PrivateRouter>
          }
        />

        {/* Users Router */}
        <Route
          exact
          path={Routes.users}
          element={
            <PrivateRouter path={Routes.users}>
              <Users />
            </PrivateRouter>
          }
        />

        {/* For unknow/non-defined path */}
        <Route exact path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
