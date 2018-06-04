import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux' // npm module syntax
import Counter from './components/Counter'
import reducer from './reducers';//This works because there is a ../reducers/index.js file
// with an export default statement and webpack transcodes the import statement into 
// a require statement and webpack supports the node standard of looking for an
// index.js file automatically.

const store = createStore(reducer);//store has 3 methodes: getState(), dispatch(), subscribe()
//we are going to use them below

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
)

render()// calling once to render the initial state (0), then the subscribe will update subsequently

store.subscribe(render); //the store will execute render any time 
//an action will be dispatched so we can update the UI of our 
//application to reflect the current application state.

