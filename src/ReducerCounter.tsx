import { ChangeEvent, useReducer } from "react";
import counterReducer, { ACTION_TYPE } from "./reducers/couter.reducer";

const ReducerCounter = () => {
  /**
   * 1.
   * useReducer:
   * - Arg1: (state, payload) => {}
   * - Arg2: initialState
   * - return: [state, dispatch]
   *
   * Description:
   * - Dispatch is called ==> Reducer is called
   */
  const [data, dispatch] = useReducer(counterReducer, {
    step: "1",
    count: 0,
  });

  const { step, count } = data;

  const handleStepChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: ACTION_TYPE.UPDATE_STEP, payload: e.target.value });

  const handleIncrement = () => dispatch({ type: ACTION_TYPE.INCREMENT });

  const handleDecrement = () => dispatch({ type: ACTION_TYPE.DECREMENT });

  return (
    <>
      <h1>Reducer Counter App</h1>
      <div>
        <span>Step:</span>
        <input type="text" value={step} onChange={handleStepChange} />
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
};

export default ReducerCounter;
