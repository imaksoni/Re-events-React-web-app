import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { format } from "date-fns";
import { toast } from "react-toastify";
import {
  addUserAttendence,
  cancelUserAttendence,
} from "../../../app/firestore/firestoreService";
import { useSelector } from "react-redux";
import UnauthModal from "../../auth/UnauthModal";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

export default function EventDetailedHeader({ event, isHost, isGoing }) {
  const [loading, setLoading] = useState(false);
  const { authenticated } = useSelector((state) => state.auth);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleUserJointEvent() {
    setLoading(true);
    try {
      await addUserAttendence(event);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUserLeaveEvent() {
    setLoading(true);
    try {
      await cancelUserAttendence(event);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {modalOpen && <UnauthModal setModalOpen={setModalOpen} />}
      <Segment.Group>
        <Segment basic attached="top" style={{ padding: "0" }}>
          <Image
            src={`/assets/categoryImages/${event.category}.jpg`}
            fluid
            style={eventImageStyle}
          />

          <Segment basic style={eventImageTextStyle}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Header
                    size="huge"
                    content={event.title}
                    style={{ color: "white" }}
                  />
                  <p>{format(event.date, "MMMM d, yyyy  h:mm a")}</p>
                  <p>
                    Hosted by{" "}
                    <strong>
                      <Link to={`/profile/${event.hostUid}`}>
                        {event.hostedBy}
                      </Link>
                    </strong>
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Segment>

        <Segment attached="bottom" clearing>
          {!isHost && (
            <>
              {isGoing ? (
                <Button onClick={handleUserLeaveEvent} loading={loading}>
                  Cancel My Place
                </Button>
              ) : (
                <Button
                  onClick={authenticated ? handleUserJointEvent : () => setModalOpen(true)}
                  loading={loading}
                  color="teal"
                >
                  JOIN THIS EVENT
                </Button>
              )}
            </>
          )}

          {isHost && (
            <Button
              color="orange"
              floated="right"
              as={Link}
              to={`/manage/${event.id}`}
            >
              Manage Event
            </Button>
          )}
        </Segment>
      </Segment.Group>
    </>
  );
}
