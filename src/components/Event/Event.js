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
    route,
    StyleLink
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
            <StyleLink to={route}>
                <Button text={buttonText} />
            </StyleLink>
        </EventWrapper>
    );
}

export default Event;