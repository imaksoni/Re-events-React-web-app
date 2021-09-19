import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomagePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/Navbar";
import Sandbox from "../../features/sandox/Sandbox";

export default function App() {
  const {key} =useLocation();
  
  return (
    <>
      <Route exact path= '/' component={HomagePage} />
      <Route path= {'/(.+)'} render= {() => (
        <>
        <NavBar />
        <Container className= 'main' >
        <Route exact path= '/events' component={EventDashboard} />
        <Route exact path= '/sandbox' component={Sandbox} />
        <Route exact path= '/events/:id' component={EventDetailedPage} />
        <Route exact path= {['/createEvent' , '/manage/:id' ]} component={EventForm} key={key} />
        </Container>
        </>
      )} />
    </>
  );
}
