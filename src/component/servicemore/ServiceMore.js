import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faUserCheck, faShoppingCart, faVideo, faStar } from '@fortawesome/free-solid-svg-icons'
import './ServiceMore.css';



const ServiceMore = (props) => {

    console.log(props.serviceMore.name);
    const { name, category, lessons, student, image } = props.serviceMore;

    return (


        <div>

            <Card className='card'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task
                    </Card.Text>
                    <small className="lesson"><FontAwesomeIcon className="icon" icon={faVideo} />{lessons}</small>
                    <small className="category"><FontAwesomeIcon className="icon" icon={faHourglass} />{category}</small>
                    <small className="student"><FontAwesomeIcon className="icon" icon={faUserCheck} />{student}</small>
                </Card.Body>
                <div className="star">
                    <small className="rat">Ratting:</small> <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                </div>

            </Card>
        </div>
    );
};

export default ServiceMore;