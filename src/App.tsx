import { ChangeEvent, useState } from "react";
import "./App.css";
import ReducerCounter from "./ReducerCounter";

// useState VS useReducer (Design Pattern: Reducer Pattern)

function App() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(0); // Auto inference feature of TypeScript

  const decrement = () => {
    setCount(count - step);
  };

  const increment = () => {
    setCount(count + step);
  };

  const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStep(+e.target.value);

    /**
     * Event handler
     * - Declare the callback
     * - Pass the callback to the event prop (onChange)
     * - Don't call it, when the event is triggered, the function will be automatically called
     */
  };

  return (
    // <>
    //   <h1>Counter App</h1>
    //   <div>
    //     <span>Step:</span>
    //     <input type="text" value={step} onChange={handleStepChange} />
    //   </div>
    //   <div>
    //     <button onClick={decrement}>-</button>
    //     <span>{count}</span>
    //     <button onClick={increment}>+</button>
    //   </div>
    // </>
    <ReducerCounter />
  );
}

export default App;
