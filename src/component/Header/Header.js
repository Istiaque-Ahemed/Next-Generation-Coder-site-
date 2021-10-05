import React from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (

    // ========Header =======
    // =============NavBar=========== 
    <div className="navbar">
          <Navbar.Brand className="tital">Next Generation Code Center</Navbar.Brand> <Navbar expand="lg">
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration:"underline"
            }} className="link" to="/home">

              Home</NavLink>

            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration:"underline"}} className="link" to="/services">Services</NavLink>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration:"underline"}} className="link" to="/programars">Top Programars</NavLink>
            <NavLink activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration:"underline"}} className="link" to="/contract">Contract</NavLink>
              <NavLink activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration:"underline"}} className="link" to="/about">About</NavLink>
      </Navbar>
    </div>
  );
};

export default Header;