import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
import React,{ useState} from 'react'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  
  return (
    <div>
        {count}
    </div>
  )
}

export default Counter