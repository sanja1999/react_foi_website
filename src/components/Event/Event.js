import React from 'react';
import Button from '../Button/Button';
import './Event.scss';

import { Link } from 'react-router-dom';

const link = {
    event: 'Find out more',
  }

const Event = ({
    image,
    title,
    description,
    buttonText
}) => {
    return (
        <div className="Event">
            <figure className="Event-Figure">
                <img src={image} alt="Design" className="Event-Image"/>
            </figure>
            <h3 className="Event-Title">{title}</h3>
            <p className="Event-Description">{description}</p>
            
            <Link text={buttonText} className="Button" to="/event">{link.event}</Link>
        </div>
    );
}

export default Event;