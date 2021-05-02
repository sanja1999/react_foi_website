import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useHistory } from 'react-router';

import {
  EventCard as EventCardWrapper,
    Title,
    Content,
    ContentRow,
    Item,
    ItemTitle,
    ItemValue,
  } from './EventCardStyles';

const link = {
  event: 'Find out more',
}

const EventCard = ({
  title, 
  dateTime, 
  location, 
  seats, 
  firm,
  buttonText,
  eventId
}) => {
  const history = useHistory();
    return (
      <EventCardWrapper>
        <Title>{title}</Title>
        <Content>
          <ContentRow>
            <Item>
              <ItemTitle>Lokacija</ItemTitle>
              <ItemValue>{location}</ItemValue>
            </Item>
            <Item>
              <ItemTitle>Datum i vrijeme</ItemTitle>
              <ItemValue>{dateTime}</ItemValue>
            </Item>
          </ContentRow>
          <ContentRow>
            <Item>
              <ItemTitle>Slobodna mjesta</ItemTitle>
              <ItemValue>{seats}</ItemValue>
            </Item>
            <Item>
              <ItemTitle>Firma</ItemTitle>
              <ItemValue>{firm}</ItemValue>
            </Item>
          </ContentRow>
        </Content>
        <Link text={buttonText} className="Button" to="/event">{link.event}<Button>
            onClick={() => history.push(`/event/${eventId}`)}
            text='Find out more'
          </Button></Link> 
      </EventCardWrapper>
     
     );
}
 
export default EventCard;