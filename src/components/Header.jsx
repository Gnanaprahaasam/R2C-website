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
            className="header px-5"
            expanded={expanded}
        >
            <>
                <Navbar.Brand as={Link} to={"/"} className="d-flex align-items-center flex-nowrap text-nowrap gap-2">
                    <img src={logo} alt="logo" width={"80"} />
                    <span className="logo">R2C</span>
                    <span className="logo-name">Robotics</span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto gap-5 navLinks">
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
                            to={"/industries"}
                            className={location.pathname === "/industries" ? `active-link` : ""}
                            onClick={handleSelect}
                        >
                            Industries
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={"/service"}
                            className={location.pathname === "/service" ? `active-link` : ""}
                            onClick={handleSelect}
                        >
                            Service
                        </Nav.Link>
                    </Nav>
                    <Nav></Nav>
                </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Header;
