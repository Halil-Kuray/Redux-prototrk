import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount} from '../features/counter/counterSlice'

function CounterActions() {

  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={ ()=> dispatch(decrement())}> - </button>
        <button onClick={ ()=> dispatch(increment())}> + </button>
        <button onClick={ ()=> dispatch(incrementByAmount(4))}> + 4 </button>
    </div>
  )
}

export default CounterActions