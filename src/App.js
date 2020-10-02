import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import { ProtectedRoute } from "./protected.route";
import ScrollToTop from "./ScrollToTop"
import "./assets/scss/index.scss"

export default function App() {
  const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return  (
          (route.protected)? 
          <ProtectedRoute
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
          />:
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <>
      <Router>
        <ScrollToTop>
          {showContentMenus(routes)}
        </ScrollToTop>
      </Router>
    </>
  );
}
