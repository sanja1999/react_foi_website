import React, { useState, useEffect } from "react";
import eventsMock from '../lib/mock/events'
import EventContainer from '../components/EventContainer/EventContainer';


import {
  SectionEvent,
  Title,
  Figure,
  Image,
  Content,
  Description,
  EventContaineroWrapper,
} from '../components/EventContainer/EventContainerStyles';

const Event = (props) => {
    const [events, setEvents] = useState(null);
    const [event, setEvent] = useState(null);
    const routeEventId = parseInt(props.match.params.id);
  
    useEffect(() => {
      setEvents(eventsMock);
    }, []);
  
    useEffect(() => {
      events && setEvent(...events.filter((event) => event.id === routeEventId));
    }, [events, routeEventId]);



    return ( 
        <>
          {event && (
            <>
          <SectionEvent>
            <Title>{event && event.title}</Title>
            <EventContaineroWrapper>
            <Figure>
                <Image src={event.imageUrl} alt={event.imageAlt} />
              </Figure>
              <Content>
                <EventContainer
                  location={event.location}
                  dateTime={event.dateTime}
                  seats={event.availability}
                  company={event.company}
                  hasButton={true}
                  route='/event'
                  buttonText='Prijavi se'
                />
              </Content>  
            </EventContaineroWrapper>
            <Description>{event.description}</Description>
          </SectionEvent>
          </>
      )}
    </>
  );
};
 
export default Event;
