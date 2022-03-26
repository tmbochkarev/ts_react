import { Button } from "../styles/Card";
import { useState } from "react";

export default function Card(props: any) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>{props.greet}</Button>
      <p>{count}</p>
    </>
  );
}
