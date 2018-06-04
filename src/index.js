import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'

import counter from './reducers';//This works because there is a ../reducers/index.js file
// with an export default statement and webpack transcodes the import statement into 
// a require statement and webpack supports the node standard of looking for an
// index.js file automatically.

const store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
)

render()// calling once to render the initial state (0), then the subscribe will update subsequently

store.subscribe(render)//subscribe() registers a callback that the redux store will call any time 
//an action has been dispatched so you can update the UI of your 
//application to reflect the current application state.
