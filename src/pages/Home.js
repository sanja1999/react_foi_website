import React, { useState, useEffect } from "react";
import eventMock from '../lib/mock/events'
import Main from "../components/Main/Main";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import { Grid } from "../lib/style/generalStyles";
import Event from "../components/Event/Event";


const Home = () => {
    const [events, setEvents] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setEvents(eventMock);
        console.log(events);
      }, 1000);
    }, [events]);
    return (
        <>
          <Main>
            <Hero />
            <Section title="Featured events">
              {events &&
                <Grid columns={3}>
                  {events.map(
                    (event) =>
                      event.isFeatured && (
                        <Event
                          key={event.id}
                          route={`/event/${event.id}`}
                          image={event.imageUrl}
                          title={event.title}
                          description={event.shortDescription}
                          imgAlt={event.imgAlt}
                          buttonText="Find out more"
                          eventId={event.id}
                          />
                  )
              )}
            </Grid>
          }
            </Section>
          </Main>
        </>
      );
    };
    
    export default Home;