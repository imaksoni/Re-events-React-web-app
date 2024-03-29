import React from "react";
import { useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";
import AccountPage from "../../features/auth/AccountPage";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomagePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/Navbar";
import ProfilePage from "../../features/profiles/profilePage/ProfilePage";
import Sandbox from "../../features/sandox/Sandbox";
import ErrorComponent from "../common/errors/ErrorComponent";
import ModalManager from "../common/modals/ModalManger";
import LoadingComponent from "./LoadingComponent";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const { key } = useLocation();
  const {initialized} = useSelector((state)=> state.async);

  if(!initialized) return <LoadingComponent content='Loading app' />

  return (
    <>
      <ModalManager />
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path="/" component={HomagePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Route exact path="/events/:id" component={EventDetailedPage} />
              <PrivateRoute
                exact
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
                key={key}
              />
              <PrivateRoute path='/profile/:id' component={ProfilePage} />
              <PrivateRoute path='/account' component={AccountPage} />
              <Route path='/error' component={ErrorComponent} />

            </Container>
          </>
        )}
      />
    </>
  );
}
