import { Button } from '../styles/Card'
import { useState } from "react";
import '../styles/main.scss'


export default function Card(props: any) {
  const [count, setCount] = useState(0);

  return (
    <>
    <p>hhhoh</p>
    <h1>{count}</h1>
    <Button onClick={() => setCount(count + 1)}>Put me</Button>
    </>
  );
}