import React from "react";
import "./EventCard.scss";
import { Link } from 'react-router-dom';

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
}) => {
    return (
      <div className="EventCard">
        <h2 className="EventCard-Title">{title}</h2>
        <div className="EventCard-Content">
          <div className="EventCard-ContentRow">
            <div className="EventCard-Item">
              <h3 className="EventCard-ItemTitle">Lokacija</h3>
              <p className="EventCard-ItemValue">{location}</p>
            </div>
            <div className="EventCard-Item">
              <h3 className="EventCard-ItemTitle">Datum i vrijeme</h3>
              <p className="EventCard-ItemValue">{dateTime}</p>
            </div>
          </div>
          <div className="EventCard-ContentRow">
            <div className="EventCard-Item">
              <h3 className="EventCard-ItemTitle">Slobodna mjesta</h3>
              <p className="EventCard-ItemValue">{seats}</p>
            </div>
            <div className="EventCard-Item">
              <h3 className="EventCard-ItemTitle">Firma</h3>
              <p className="EventCard-ItemValue">{firm}</p>
            </div>
          </div>
        </div>
        <Link text={buttonText} className="Button" to="/event">{link.event}</Link> 
      </div>
     );
}
 
export default EventCard;