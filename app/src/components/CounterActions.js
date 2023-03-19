import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount} from '../features/counter/counterSlice'

function CounterActions() {

  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={ ()=> dispatch(decrement())}> - 1 </button>
        <button onClick={ ()=> dispatch(increment())}> + 1 </button>
        <button onClick={ ()=> dispatch(incrementByAmount(5))}> + 5 </button>
    </div>
  )
}

export default CounterActions