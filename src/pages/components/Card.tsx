// import { Button } from "../styles/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";

export default function Card(props: any) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="secondary" onClick={() => setCount(count + 1)}>
        {props.greet}
      </Button>
      <Container fluid="md">
        <Row className="mx-0">
          <Button as={Col} variant="primary">
            Button #1
          </Button>
          <Button as={Col} variant="secondary" className="mx-2">
            Button #2
          </Button>
          <Button as={Col} variant="success">
            Button #3
          </Button>
        </Row>
      </Container>
      <p>{count}</p>
    </>
  );
}
