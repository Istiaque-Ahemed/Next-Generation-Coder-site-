import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './MoreService.css';
import ServiceMore from '../servicemore/ServiceMore'

const MoreService = () => {
    const [moreservice,setMoreservice] = useState([]);
    //=======  Services fack Data =======
    useEffect(()=>{
        fetch('./service.JSON')
        .then(res => res.json())
        .then(data => setMoreservice(data))

    },[])
    return (
        <div className="course-detials">
            {/*======= Maping====== */}
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