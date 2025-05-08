import { useState, useEffect } from "react";
import type { WeatherProps } from "../custom";

export default function WeatherComponent(props: WeatherProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <h1 onClick={() => setCount(count + 1)}>
      The weather is {props.weather}, and the counter shows {count}
    </h1>
  );
}