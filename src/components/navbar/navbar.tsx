import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import NavItem from "react-bootstrap/NavItem";
import { Link } from 'react-router-dom';
import logo from "../../resources/logo.png"
import "./navbar.scss";

export default class NimbleNav extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <NavbarBrand>
                    <Link to="/"><img className="navbarBrand" src={logo} alt="Nimble Taxi Logo" /></Link>
                </NavbarBrand>
                <Nav className="mr-auto">
                </Nav>
            </Navbar>
        )
    }
}
