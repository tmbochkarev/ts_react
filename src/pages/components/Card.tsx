import { Button } from "../styles/Card";
import { useState } from "react";

export default function Card(props: any) {
  const [count, setCount] = useState(0);

  let cities: any = [
    { id: 1, name: "Berlin", population: 2000000 },
    {
      id: 2,
      name: "Paris",
      population: 4000000,
    },
    {
      id: 3,
      name: "Amsterdam",
      population: 500000,
    },
    {
      id: 4,
      name: "Brussel",
      population: 700000,
    },
  ];

  const BIG_CITY_POPULATION: number = 2 * Math.pow(2, 6);

  const mapCities = cities.map((city) => city);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>{props.greet}</Button>
      <p>{count}</p>
      <p>{mapCities}</p>
    </>
  );
}
