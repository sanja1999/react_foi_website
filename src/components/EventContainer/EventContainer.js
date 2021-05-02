import React from "react";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useHistory } from 'react-router';


import { 
    ContentRow, 
    Item, 
    ItemTitle, 
    ItemValue 
} from './EventContainerStyles';

const link = {
    event: 'Prijavi se',
}

const EventContainer = ({
  title, 
  image,
  dateTime, 
  location, 
  seats, 
  firm,
  buttonText,
  desc
}) => {
    return (
    <>
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
                 <Button text='Prijavi se' />
               
                </>     
    
     );
}

 
export default EventContainer;