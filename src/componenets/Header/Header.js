import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/favicon.jpg";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <Navbar.Brand className="fw-bold">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        LEARN<span className="text-info"> UP</span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
