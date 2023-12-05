import { createReducer, on } from "@ngrx/store";
import { increment, decrement, set } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);


//alt way of creating a reducer
// export function counterReducer(state = initialState, action: any) {
//   if (action.type ===  '[Counter] Increment') {
//     return state + action.value;
//   } 
//   return state;
//}