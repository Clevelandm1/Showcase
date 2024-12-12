import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

import Sketch from "./p5/sketchTest";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <Message />
      {alertVisible && (
        <Alert
          look="alert alert-danger alert-dismissible fade show"
          showAlert={() => setAlertVisibility(false)}
        >
          AHHHHHH PANIC!!!
          <span>Hello?</span>
        </Alert>
      )}
      {/*Continuing, buttonclicked was called. Now we can execute a function here
      that will do something. The function we input here is sent to the button comp,
      where the button comp will run it when it is clicked. This is passing a function
      as a parameter.*/}
      <Button color="dark" buttonclicked={() => setAlertVisibility(true)}>
        Show Alert
      </Button>
      <ListGroup
        items={["New York", "Georgia", "Louisiana", "Germany", "Nevada"]}
        heading="cities"
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      />
      <ListGroup
        items={["NOTHING", "Butter", "Water", "Air", "Salt", "Ramen"]}
        heading="Favorite Food Items"
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      />
      <Sketch />
    </>
  );
}

export default App;
