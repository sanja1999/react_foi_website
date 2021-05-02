import Main from '../components/Main/Main';
import Section from '../components/Section/Section';
import { Grid } from "../lib/style/generalStyles";
import EventCard from '../components/EventCard/EventCard';
import React, { useState, useEffect, useImperativeHandle } from "react";
import eventMock from "../lib/mock/events";
import EventsCard from '../components/EventCard/EventCard';
import { EventsTitle } from '../lib/style/generalStyles';
// import { SectionEvents } from './EventsStyles';

const Events = () => {
    const [events, setEvent] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setEvent(eventMock);
      }, 1000);
    }, [events]);
    return (
        <>
        <EventsTitle>Events</EventsTitle>
          <Main>
          <Section>
            
              {events &&
                <Grid columns={7}>
                  {events.map(
                    (event) =>
                        <EventsCard 
                        key={event.id}
                        title={event.title}
                        location={event.location}
                        dateTime={event.dateTime}
                        seats={event.availability}
                        firm={event.company}
                        buttonText="Find out more"
                        
        
                    />
                    
                  
              )}
            </Grid>
          }
          </Section>
          </Main>
        </>
      );
    };
          
  
        
 
 
export default Events;