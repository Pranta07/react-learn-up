import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/favicon.jpg";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="fw-bold" href="/home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    LEARN<span className="text-info"> UP</span>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink
                        className="nav-item"
                        to="/home"
                        activeClassName="selected"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="nav-item"
                        to="/courses"
                        activeClassName="selected"
                    >
                        Courses
                    </NavLink>
                    <NavLink
                        className="nav-item"
                        to="/tutorials"
                        activeClassName="selected"
                    >
                        Tutorials
                    </NavLink>
                    <NavLink
                        className="nav-item"
                        to="/about"
                        activeClassName="selected"
                    >
                        About Us
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
