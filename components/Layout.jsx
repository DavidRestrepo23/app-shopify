import { Container } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import AppBarMenu from "./ui/AppBarMenu";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <nav>
          <AppBarMenu />
        </nav>
        <Container maxWidth="md">{props.children}</Container>
      </main>
    </>
  );
};

export default Layout;
