import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    const handleSelect = () => {
        setExpanded(false);
    };

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className="header px-sm-5 px-1 shadow-sm"
            expanded={expanded}
        >
            <>
                <Navbar.Brand as={Link} to={"/"} className="d-flex align-items-center flex-nowrap text-nowrap gap-2">
                    <img src={logo} alt="logo" width={"80"} />
                    <span className="logo">R2C</span>
                    <span className="logo-name">Technologies</span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-sm-auto mx-2 gap-md-4 navLinks">
                        <Nav.Link
                            as={Link}
                            to={"/training"}
                            className={location.pathname === "/training" ? `active-link` : ""}
                            onClick={handleSelect}
                        >
                            Training
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={"/internship"}
                            className={location.pathname === "/internship" ? `active-link` : ""}
                            onClick={handleSelect}
                        >
                            Internship
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={"/projects"}
                            className={location.pathname === "/projects" ? `active-link` : ""}
                            onClick={handleSelect}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={"/services"}
                            className={location.pathname === "/services" ? `active-link` : ""}
                            onClick={handleSelect}
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={"/contact"}
                            className={location.pathname === "/contact" ? `active-link` : ""}
                            onClick={handleSelect}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav>
                    <Nav></Nav>
                </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Header;
