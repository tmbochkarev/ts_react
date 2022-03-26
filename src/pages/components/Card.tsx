// import { Button } from "../styles/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Card(props: any) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="secondary" onClick={() => setCount(count + 1)}>
        {props.greet}
      </Button>
      <p>{count}</p>
    </>
  );
}
