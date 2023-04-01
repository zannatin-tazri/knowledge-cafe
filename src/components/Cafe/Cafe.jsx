import React, { useEffect, useState } from 'react';
import './Cafe.css'
import Knowledge from '../Knowledge/Knowledge';

const Cafe = () => {
    const [informations,setInformations]=useState([]);
    const [speantTime, setSteantTime]=useState([]);

    useEffect(()=>{
        fetch('fake-data.json')
        .then(res=>res.json())
        .then(data=>setInformations(data));
    },[]);
    const handleSpeantTimeRead=(information)=>{
        const time=[...speantTime,information];
        setSteantTime(time);
    }
    return (
        <div className='cafe-container'>
            <div className="info">
              {
                informations.map(information=><Knowledge
                key={information.id}
                information={information}
                handleSpeantTimeRead={handleSpeantTimeRead}
                ></Knowledge>)
              }
            </div>
            <div >
                <p className='bookmarked-blog-time'>Speant time on read :{speantTime.length}</p>

                <h4 className="bookmarked-blog">Bookmarked Blogs : 8</h4>
            </div>
        </div>
    );
};

export default Cafe;