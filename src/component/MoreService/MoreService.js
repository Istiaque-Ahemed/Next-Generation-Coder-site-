import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './MoreService.css';
import ServiceMore from '../servicemore/ServiceMore'

const MoreService = () => {
    const [moreservice,setMoreservice] = useState([]);

    useEffect(()=>{
        fetch('./service.JSON')
        .then(res => res.json())
        .then(data => setMoreservice(data))

    },[])
    return (
        <div className="course-detials">
            {
                moreservice.map(serviceMore=><ServiceMore
                
                key={serviceMore.id}
                serviceMore={serviceMore}
                
                ></ServiceMore>)
            }
        </div>
    );
};

export default MoreService;