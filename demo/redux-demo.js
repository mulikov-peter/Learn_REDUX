const redux = require('redux');

// ----- Create reducer function
// Should be a pure function
// Inputs: Old State + Dispatched Action
// Return: New State Object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };
  }

  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1 };
  }

  return {
    counter: state,
  };
};

// ----- Create store
const store = redux.createStore(counterReducer);

console.log('store', store);

const counterSubscriber = () => {
  const latestState = store.getState();

  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
