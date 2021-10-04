import React from 'react';
import './Header.css';
import { Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className="navbar">
    <Navbar.Brand className="tital">Next Generation Code Center</Navbar.Brand> <Navbar  expand="lg"> 
        <Link className="link" to ="/home">Home</Link>
        <Link className="link"to ="/services">Servies</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/programars">Top Programars</Link>
        <Link  className="link"to="*">Contract</Link>
   </Navbar>
        </div>
    );
};

export default Header;