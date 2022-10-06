import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { ActionType } from './action-types';
import { persistMiddleware } from './middlewares/persist-middleware'
import reducers from './reducers';

export const store = createStore(
  reducers, 
  {}, 
  applyMiddleware(thunk, persistMiddleware)
);

const state = store.getState();
console.log(state.cells);

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text',
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'code',
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: null,
//     type: 'text',
//   },
// });


