import React from "react";
import './EventContainer.scss';
import { Link } from 'react-router-dom';

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
}) => {
    return (
        <div className="EventContainer">
        <h2 className="EventContainer-Title">{title}</h2>
        <div className="EventContainer-Info">
            <figure className="EventContainer-Info-Figure">
                <img src={image} alt="UX/UI workshop" className="EventContainer-Info-Figure-Image"></img>
            </figure>
            <div className="EventContainer-Info-Content">
                <div className="EventContainer-Info-Content-Row">
                    <div className="EventContainer-Info-Item">
                        <h3 className="EventContainer-Info-ItemTitle">Lokacija</h3>
                        <p className="EventContainer-Info-ItemValue">{location}</p>
                    </div>
                    <div className="EventContainer-Info-Item">
                        <h3 className="EventContainer-Info-ItemTitle">Datum i vrijeme</h3>
                        <p className="EventContainer-Info-ItemValue">{dateTime}</p>
                    </div>
                </div>
                <div className="EventContainer-Info-Content-Row">
                    <div className="EventContainer-Info-Item">
                        <h3 className="EventContainer-Info-ItemTitle">Slobodna mjesta</h3>
                        <p className="EventContainer-Info-ItemValue">{seats}</p>
                    </div>
                    <div className="EventContainer-Info-Item">
                        <h3 className="EventContainer-Info-ItemTitle">Firma</h3>
                        <p className="EventContainer-Info-ItemValue">{firm}</p>
                    </div>
                </div>
                <div className="EventContainer-Info-Content-Row">
                <Link text={buttonText} className="Button" to="/event">{link.event}</Link>
                </div>
            </div>
        </div>
            <p className="EventContainer-Info-Description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut repellat ipsum voluptatibus ipsa
                aspernatur eum voluptatem, odit ducimus sequi minus praesentium beatae, eius eos ipsam consequuntur
                voluptate exercitationem quod.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequatur corrupti minus totam illo.
                Vitae dolore itaque ipsum neque nam eius officiis magnam in temporibus expedita perspiciatis libero,
                sint nostrum!
            </p>
        </div>
     );
}

 
export default EventContainer;