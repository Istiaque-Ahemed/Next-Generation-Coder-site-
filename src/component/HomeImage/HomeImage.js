import React from 'react';
import { Button } from 'react-bootstrap';
import './HomeImage.css'
import img from '../service/Programmer-bro.png';

const HomeImage = () => {
    return (
        <div className="happy-code">
          
            <img  src={img} alt="" />
           <div>
           <h1>Happy Coding</h1>
            <p>These techniques and principles definitely deserve respect and reflect the universal rules of good code – simple, clear, readable, testable and maintainable. In addition to them, there are a few extremely simple rules that solve a number of problems with having a good code.</p>
             <div className="button">
             <Button className="details-btn" variant="outline-success">Get started</Button>         
            <Button className="details-btn" variant="outline-success">Details</Button>  
             </div>       
            </div>
           
        </div>
        

        
    );
};

export default HomeImage;