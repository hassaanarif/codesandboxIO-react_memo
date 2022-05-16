import { memo, useEffect } from "react";

function Counter(props) {
  console.log("Counter is mounting");

  useEffect(() => {
    console.log("Counter has been mounted");
  });

  return (
    <div className="Counter">
      <br />
      <div>Counter Value: {props.counterValue}</div>
      <br />
      <button onClick={props.onIncrement}>Increment</button>{" "}
      <button onClick={props.onDecrement}>Decrement</button>
      <div>
        <br />
        <button onClick={props.onReset}>Reset</button>
      </div>
    </div>
  );
}

export default memo(Counter);
