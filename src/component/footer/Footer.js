import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone,faListUl,faAddressCard} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">

            {/*======= Footer ====== */}
            <div>
                {/*====== Contacts==== */}
                <h3>Contacts</h3>
                <p><FontAwesomeIcon className="icon" icon={faEnvelope} />Email:istiaqueahemd@gmail.com</p>
                <p><FontAwesomeIcon className="icon" icon={faPhone} />Phone:098766545</p>

                
            </div>  
            <div>
                {/*====== About ===== */}
                <h3>About</h3>
                <p><FontAwesomeIcon className="icon" icon={faListUl} />Online line Programming learning site </p>
                <p><FontAwesomeIcon className="icon" icon={faListUl} />High quality video content</p>
                <p><FontAwesomeIcon className="icon" icon={faListUl} />Best programming teachers</p>

            </div>
            <div>
                {/*======= Address ====== */}
                <h3>Address</h3>
                < address className="address"><FontAwesomeIcon className="icon" icon={faAddressCard} />
                    Street:  41, arambagh, motijheel c/a, 1000

                    City:   Dhaka

                    State/province/area:    Dhaka

                    Phone number  017 11303876

                    Zip code   1000

                    Country calling code  +880

                    Country  Bangladesh
                </address>
            </div>
        </div>
    );
};

export default Footer;