import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  incrementAction, decrementAction
} from './redux/counter/counter'

const Counter = () => {
  const dispatch = useDispatch()

  // subscribing to store key
  const value = useSelector((store) => store.counterReducer.counter)

  const increment = () => {
    dispatch(incrementAction())
  }

  const decrement = () => {
    dispatch(decrementAction())
  }

  return <div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <div>{value}</div>
  </div>
}

export default Counter