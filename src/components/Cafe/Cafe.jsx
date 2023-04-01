import React, { useEffect, useState } from 'react';
import './Cafe.css'
import Knowledge from '../Knowledge/Knowledge';



const Cafe = () => {
    const [informations,setInformations]=useState([]);
    const [bookMarked, setBookMarked]=useState([]);

    useEffect(()=>{
        fetch('fake-data.json')
        .then(res=>res.json())
        .then(data=>setInformations(data));
    },[]);
    
    const bookMark=(information)=>{
        const newBookMark=[...bookMarked,information];
        setBookMarked(newBookMark);
    }
    
    const handleSpeantTimeRead=(information)=>{
        console.log(information.readTime);
      
    }
    
    return (
        <div className='cafe-container'>
            <div className="info">
              {
                informations.map(information=><Knowledge
                key={information.id}
                information={information}
                handleSpeantTimeRead={handleSpeantTimeRead}
                bookMark={bookMark}
                ></Knowledge>)
              }
            </div>
            <div >
            <div>
            <p className='bookmarked-blog-time'>Speant time on read : </p>
            <h4 className="bookmarked-blog">Bookmarked Blogs : 8</h4>
            <p>{bookMarked.length}</p>
            
            

            </div>
            </div>
        </div>
    );
};

export default Cafe;