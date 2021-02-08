const counterReducer = (
  state = { counter: 0 },
  action
) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER': {
      return {
        ...state,
        counter: state.counter + 1
      }
      
    }
    case 'DECREMENT_COUNTER': {
      return {
        ...state,
        counter: state.counter - 1
      } 
    }
    default: {
      return state
    }
  }
}

const incrementAction = () => {
  return {
    type: 'INCREMENT_COUNTER'
  }
}

const decrementAction = () => {
  return {
    type: 'DECREMENT_COUNTER'
  }
}

export {
  counterReducer,
  incrementAction,
  decrementAction
}