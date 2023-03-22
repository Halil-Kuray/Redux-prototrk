import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Page404() {
  return (
    <div>THis page is not exist
        <NavLink to='/about'> Back to About</NavLink>
    </div>
  )
}
