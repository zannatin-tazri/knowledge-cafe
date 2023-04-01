import React from 'react';
import './Knowledge.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Knowledge = (props) => {
    console.log(props)
    const {name,picture,id,readTime,author_img,blog_title}=props.information;
    const handleSpeantTimeRead=props.handleSpeantTimeRead;

    return (
        <div className='info-container'>
            <div className='image'>
           <img src={picture} alt="" />

           <div className='publish-info'>
            <div className='publisher-info'>
                <div className='author-img'>
                    <img src={author_img} alt="" />
                </div>

             <div>
             <p className='name'>{name}</p>
              <small>March 14(4 Days ago)</small>
             </div>

            </div>
            <div className='read-time'>
                <p>{readTime} min read
                <button><FontAwesomeIcon icon={faBookmark} /></button> </p>
            </div>
           </div>
        </div>
        <h3 className='blog-title'>{blog_title}
        </h3>
        <small className='hashtag'>#beginners #programming</small><br />
        <small onClick={()=>handleSpeantTimeRead(props.information)} className='mark-as-read'><u>Mark as read</u> </small>
        </div>
        
        
    );
};

export default Knowledge;