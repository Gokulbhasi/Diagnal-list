import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import NavBar from "../components/navbar/NavBar";

import HomePage from "../pages/home/HomePage";
import NotFound from "../pages/notfound/NotFound";

import RouteConfig from "./RouteConfig";

const AppRoute = () => {
  return (
    <Router>
      <div className="ui fluid container">
        {/* <NavBar /> */}

        <div className="pusher">
          <div className="ui minheight navbarmargin container">
            <Switch>
              <Route path={RouteConfig.home.path} exact component={HomePage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppRoute;

/*

*/
