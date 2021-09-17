import React from "react";
import { Route } from "react-router";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomagePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/Navbar";

export default function App() {
  
  return (
    <>
      <Route exact path= '/' component={HomagePage} />
      <Route path= {'/(.+)'} render= {() => (
        <>
        <NavBar />
        <Container className= 'main' >
        <Route exact path= '/events' component={EventDashboard} />
        <Route exact path= '/events/:id' component={EventDetailedPage} />
        <Route exact path= {['/createEvent' , '/manage/:id' ]} component={EventForm} />
        </Container>
        </>
      )} />
    </>
  );
}
