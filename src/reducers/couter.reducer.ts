interface Data {
  step: string | number;
  count: number;
}

type ActionPayload = Data[keyof Data];

interface Action {
  type: string;
  payload?: ActionPayload;
}

export enum ACTION_TYPE {
  UPDATE_STEP = 'UPDATE_STEP',
  DECREMENT = 'DECREMENT',
  INCREMENT = 'INCREMENT',
}

export type CounterReducer = (state: Data, action: Action) => Data;

const counterReducer = (state: Data, action: Action): Data => {
  const updatedState = { ...state };
  switch (action.type) {
    case ACTION_TYPE.UPDATE_STEP:
      updatedState.step = '' + action.payload;
      break;
    case ACTION_TYPE.DECREMENT:
      updatedState.count -= +updatedState.step;
      break;
    case ACTION_TYPE.INCREMENT:
      updatedState.count += +updatedState.step;
      break;
    default:
      console.error('Invalid action type');
  }

  return updatedState;
}

export default counterReducer;
