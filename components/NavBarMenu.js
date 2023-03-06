import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from "next/link";
import { useEffect } from "react";

const NavbarMenu = () => {


    return (
        <Navbar bg="dark" variant="dark" id="navbar-menu" className='px-4'>
            <Navbar.Brand>My Next App</Navbar.Brand>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/posts">Posts</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/jokes/random">Jokes</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarMenu;

