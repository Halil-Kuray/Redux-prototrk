import React, { useEffect, useState } from 'react'


export default function Test() {

    const [count, setCount] = useState(0)

    useEffect( () => {
        console.log("component rebdered!")
    })

    useEffect( () => {
        console.log("First time rendered")
        return () => {
            console.log("component destroyed")
        }
    }, [])

    useEffect( () => {
        console.log("Count has changed", count)
    }, [count])

  return (
    <div>
        My Test Component
        <h3> {count}</h3>
        <button onClick={() => setCount( cntr => cntr + 1)}>
            +1
        </button>
    </div>
  )
}
