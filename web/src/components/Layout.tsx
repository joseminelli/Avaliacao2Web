// src/components/Layout.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Avaliação 2 Web
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
