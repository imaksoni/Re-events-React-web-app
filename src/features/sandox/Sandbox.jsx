import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import TestMap from "./TestMap";
import TestPlaceInput from "./TestPlaceInput";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  const { loading } = useSelector((state) => state.async);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const [location, setLocation] = useState(defaultProps);

  function handleSetLocation(latLng) {
    setLocation({
      ...defaultProps,
      center: { lat: latLng.lat, lng: latLng.lng },
    });
  }

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data} </h3>
      <Button
        name='increment'
        loading={loading && target=== 'increment'} 
        content="Increment"
        color="green"
        onClick={(e) => {
          dispatch(increment(10));
          setTarget(e.target.name)
        }}
      />
      <Button
        name='decrement'
        loading={loading && target=== 'decrement'}
        content="Decrement"
        color="red"
        onClick={(e) => {
          dispatch(decrement(5));
          setTarget(e.target.name)
        }}
      />
      <Button
        content="open Modal"
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
      />
      <div style={{ marginTop: 15 }}>
        <TestPlaceInput setLocation={handleSetLocation} />
        <TestMap location={location} />
      </div>
    </>
  );
}
