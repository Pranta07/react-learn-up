import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                    <Link className="nav-item" to="/home">
                        Home
                    </Link>
                    <Link className="nav-item" to="/courses">
                        Courses
                    </Link>
                    <Link className="nav-item" to="/tutorials">
                        Tutorials
                    </Link>
                    <Link className="nav-item" to="/about">
                        About Us
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
