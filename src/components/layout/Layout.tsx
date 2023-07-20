import React, { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface HeaderProps {
  children: any;
}

const Layout: FC<PropsWithChildren<HeaderProps>> = ({children}) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        <Grid md={3}>
          <Sidebar />
        </Grid>
        <Grid md={9}>{children}</Grid>
      </Grid>
    </>
  );
};

export default Layout;
