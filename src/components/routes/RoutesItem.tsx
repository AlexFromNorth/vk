import React, { FC, PropsWithChildren } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./List";
import Layout from "../layout/Layout";


const RoutesItem: FC = () => {
  const isAuth = true;
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => {
          if (route.auth && !isAuth) {
            return false;
          }
          return (
            <>
              <Route
                path={route.path}
                key={`router ${route.path}`}
                element={<Layout children={<route.element/>}/>}
              ></Route>
            </>
          );
        })}
        {/* <Route element={Error404} /> */}
      </Routes>
    </Router>
  );
};

export default RoutesItem;
