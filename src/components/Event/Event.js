import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import './Event.scss';

import {
    Event as EventWrapper,
    Figure,
    Image,
    Title,
    Description,
    imgAlt,
    route
} from './EventStyles';

const Event = ({
    image,
    title,
    description,
    route,
    buttonText,
    imageAlt
}) => {
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt={imageAlt}/>
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Link to="/event" style={{ textDecoration: 'none' }}>
                <Button text={buttonText}/>
            </Link>
        </EventWrapper>
    );
}

export default Event;