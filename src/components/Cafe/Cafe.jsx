import React, { useEffect, useState } from 'react';
import './Cafe.css'
import Knowledge from '../Knowledge/Knowledge';

const Cafe = () => {
    const [informations,setInformations]=useState([]);

    useEffect(()=>{
        fetch('fake-data.json')
        .then(res=>res.json())
        .then(data=>setInformations(data));
    },[])
    return (
        <div className='cafe-container'>
            <div className="info">
              {
                informations.map(information=><Knowledge
                key={information.id}
                information={information}
                ></Knowledge>)
              }
            </div>
            <div className="bookmarked-blog">
                <p>Speant time on read :</p>

                <h6>Bookmarked Blogs : 8</h6>
            </div>
        </div>
    );
};

export default Cafe;