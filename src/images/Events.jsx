import React from "react";
import { Button } from "react-bootstrap";
const Events = () => {
  const function1 = () => {
    window.alert("Hello React.");
    console.log("Hello Console");
  };
  const functionParams = (a) => {
    window.alert("Hello " + a);
  };
  let emri = "Anna";
  const ChangeName = () => {
    emri = "Ben";
    console.log(emri);
  };
  return (
    <div>
      <Button variant="primary" onClick={function1}>
        Call function 1
      </Button>
      <Button variant="primary" onClick={() => console.log("Hello")}>
        Call function 2
      </Button>
      <hr />
      <Button variant="primary" onClick={() => functionParams("Anna")}>
        Call function params 1
      </Button>
      <Button variant="primary" onClick={() => functionParams("Ben")}>
        Call function params 2
      </Button>
      <hr />
      <h1>{emri}</h1>
      <Button variant="primary" onClick={ChangeName}>
        Change Name
      </Button>
    </div>
  );
};

export default Events;
