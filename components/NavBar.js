/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navBar">
      <Container>
        <Link class="nav-link" passHref href="/">
          <Navbar.Brand href="#home">The Arconia</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/characters">
              <Nav.Link>Characters</Nav.Link>
            </Link>
            <Link passHref href="/character/new">
              <Nav.Link>New Character</Nav.Link>
            </Link>
            <Button class="btn" nClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
