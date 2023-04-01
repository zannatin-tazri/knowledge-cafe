import React from 'react';
import './Knowledge.css'

const Knowledge = (props) => {
    const {name,picture,id,readTime}=props.information;
    return (
        <div className='info-container'>
            <div className='image'>
           <img src={picture} alt="" />

           <div>
            <div>
                
              <p>{name}</p>
              <small>March 14</small>
            </div>
            <div>
                <p></p>
            </div>
           </div>
        </div>
        </div>
        
    );
};

export default Knowledge;