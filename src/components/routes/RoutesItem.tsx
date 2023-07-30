import React, { FC, PropsWithChildren, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { routes } from "./List";
import Layout from "../layout/Layout";
import { useAuth } from "../providers/useAuth";
import Auth from "../pages/auth/Auth";

const RoutesItem: FC = () => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  // const isAuth = true;
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => {
          // if (route.auth && !user) {
          //   console.log("what");
          //   <Route
          //   path={'/'}
          //   key={`router ${route.path}`}
          //   // key={`router test`}
          //   // element={<Layout children={<route.element/>}/>}
          //   element={
          //     <Layout>
          //       {route.auth && !user ? <Auth /> : <route.element />}
          //     </Layout>
          //   }
          // ></Route>
          //       // navigate("/auth");

          //   // return false;
          // }
          return (
            <>
              <Route
                path={route.path}
                key={`router ${i}`}
                // element={<Layout children={<route.element/>}/>}
                element={
                  <Layout>
                    {route.auth && !user ? <Auth /> : <route.element />}
                  </Layout>
                }
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
