import { Button } from "../components/Button.tsx";

export type CounterButtonProps = {
  type: "increment" | "decrement";
  setter: (number: number) => void;
  count: number;
};

export const CounterButton = (
  { type, setter, count }: CounterButtonProps,
) => {
  return (
    <Button
      onClick={() => setter(type === "increment" ? count + 1 : count - 1)}
    >
      {type}
    </Button>
  );
};
