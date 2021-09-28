import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { signOutFirebase } from "../../app/firestore/firebaseService";

export default function SignedInMenu() {
  const {currentUser} = useSelector(state=> state.auth );
  const history = useHistory();

  async function handleSignedOut(){
    try{
      await signOutFirebase();
      history.push('/');
    }
    catch(error){
      toast.error(error)
    }
  }

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src= {currentUser.photoURL || '/assets/user.png' } />
      <Dropdown pointing="top left" text={currentUser.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item as={Link} to= '/account' text="My Account" icon="settings" />
          <Dropdown.Item
            text="Sign out"
            icon="power"
            onClick={handleSignedOut}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
