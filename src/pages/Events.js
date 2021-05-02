import React, {useState, useEffect} from 'react';
import Section from '../components/Section/Section';
import { Center, Grid } from '../lib/style/generalStyles';
import eventMock from "../lib/mock/events";
import EventsCard from '../components/EventCard/EventCard';
import { EventsTitle } from '../lib/style/generalStyles';
import SearchBar from '../components/SearchBar/SearchBar';
// import { SectionEvents } from './EventsStyles';

const Events = () => {
    const [events, setEvent] = useState(0);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        setEvent(eventMock);
      }, 1000);
    }, [events]);

    const [searchTerm, setSearctTerm] = useState("");
    const Search = (prop) => {
    setSearctTerm(prop.target.value);
    
  };
    
    return (
        <>
        
        
          <Section>
        <EventsTitle>Events</EventsTitle>
        <Center>
            <SearchBar
            placeholder='Search event by title'
            Search={Search}
            />
        </Center>
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
        </>
      );
    };
          
  
        
 
 
export default Events;