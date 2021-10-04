import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css';
import Service from '../service/Service';

const Home = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="course-card ">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                    

                ></Service>)
            }
        </div>
    );
};

export default Home;