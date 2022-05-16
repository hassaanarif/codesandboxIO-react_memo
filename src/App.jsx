import { useState, useEffect, useCallback } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import "./app.css";

export default function App() {
  let [counterValue, setCounterValue] = useState(0);
  let [inputValue, setInputValue] = useState("");

  let handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);
  let handleIncrement = useCallback(() => {
    setCounterValue((previous) => previous + 1);
  }, []);
  let handleDecrement = useCallback(() => {
    setCounterValue((previous) => previous - 1);
  }, []);
  let handleReset = useCallback(() => {
    setCounterValue(0);
  }, []);

  console.log("App is mounting");

  useEffect(() => {
    console.log("App has been mounted");
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Input inputValue={inputValue} onInputChange={handleInputChange} />
      <Counter
        counterValue={counterValue}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}></Counter>
    </div>
  );
}
