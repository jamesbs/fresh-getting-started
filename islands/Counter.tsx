import { useState } from "preact/hooks";
import { CounterButton } from "../components/counter-button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <CounterButton type="increment" setter={setCount} count={count} />
      <CounterButton type="decrement" setter={setCount} count={count} />
    </div>
  );
}
