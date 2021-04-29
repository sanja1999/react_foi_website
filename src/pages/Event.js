import React, { useState, useEffect } from "react";
import eventsMock from '../lib/mock/events'
import Main from '../components/Main/Main';
import Section from '../components/Section/Section';
import ImageDesign from '../assets/images/design.jpg';
import EventContainer from '../components/EventContainer/EventContainer';

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
        <Main>
        <Section>
            <EventContainer title="UI/UX design workshop" image={ImageDesign} location="Hodnik FOI-a" dateTime="14.10.(9:00-16:00h)" seats="15/60" company="Speck" buttonText="Prijavi se"/>
        </Section>
        </Main>
        </>
     );
}
 
export default Event;
