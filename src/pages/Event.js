import Main from '../components/Main/Main';
import Section from '../components/Section/Section';
import ImageDesign from '../assets/images/design.jpg';
import EventContainer from '../components/EventContainer/EventContainer';

const Events = () => {
    return ( 
        <>
        <Main>
        <Section>
            <EventContainer title="UI/UX design workshop" image={ImageDesign} location="Hodnik FOI-a" dateTime="14.10.(9:00-16:00h)" seats="15/60" firm="Speck" buttonText="Prijavi se"/>
        </Section>
        </Main>
        </>
     );
}
 
export default Events;
