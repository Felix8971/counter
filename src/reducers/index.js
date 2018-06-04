

export default (state = 0, action) => {//we simply use 0 if state is undefined (ECMAScript 2015)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
