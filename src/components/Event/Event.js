import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import { useHistory } from 'react-router';

import {
    Event as EventWrapper,
    Figure,
    Image,
    Title,
    Description,
    route,
    StyleLink
} from './EventStyles';

const Event = ({
    image,
    title,
    description,
    route,
    buttonText,
    eventId
}) => {
    const history = useHistory();
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt='Design'/>
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <StyleLink to={route}>
                <Button onClick={() => history.push(`/event/${eventId}`)} text={buttonText} />
            </StyleLink>
        </EventWrapper>
    );
}

export default Event;