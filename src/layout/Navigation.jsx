import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectToken } from "../store/user/selector";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Navigation = () => {
    const isAuthenticated = useSelector(selectToken);

    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {isAuthenticated ? (
                            <>
                            </>
                        ) : (
                            <>
                                <Link
                                    className="navbar-brand navbar-item mt-3 mb-3 ml-4"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
