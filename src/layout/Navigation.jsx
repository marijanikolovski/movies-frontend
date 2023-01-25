import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectToken } from "../store/user/selector";
import { logout } from "../store/user/slice";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

export const Navigation = () => {
    const isAuthenticated = useSelector(selectToken);
    const history = useHistory();
    const dispatch = useDispatch();

    async function handleLogout() {
        dispatch(logout());
        console.log("logout successfully");
        history.replace("/login");
    }

    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {isAuthenticated ? (
                            <>
                                <Link
                                    className="navbar-brand navbar-item mt-3 mb-3 ml-2"
                                    to="/create"
                                >
                                    Create New Movie
                                </Link>
                                <Link
                                    className="navbar-brand navbar-item mt-3 mb-3 ml-2"
                                    to="/movies"
                                >
                                    Movies
                                </Link>
                                <Link
                                    className="navbar-brand navbar-item mt-3 mb-3 ml-2"
                                    to="/watchlist"
                                >
                                    Watch List
                                </Link>
                                <Button type="submit" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link
                                    className="navbar-brand navbar-item mt-3 mb-3 ml-4"
                                    to="/login"
                                >
                                    Login
                                </Link>
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
