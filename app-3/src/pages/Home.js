import React from 'react'
import { useParams } from 'react-router-dom'

export default function Home() {

  const {id, item} = useParams()

  console.log(id, item)

  return (
    <div>Home</div>
  )
}
