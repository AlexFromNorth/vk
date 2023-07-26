import React, { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useAuth } from "../providers/useAuth";

interface HeaderProps {
  children: any;
}

const Layout: FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user && (
          <Grid md={user ? 9 : 12}>
            <Sidebar />
          </Grid>
        )}
        <Grid md={9}>{children}</Grid>
      </Grid>
    </>
  );
};

export default Layout;
