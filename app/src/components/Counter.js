import { useSelector } from 'react-redux'
import React from 'react'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  
  return (
    <div>
        {count}
    </div>
  )
}

export default Counter