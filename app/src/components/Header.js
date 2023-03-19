import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const {dark, language} = useSelector((state) => state.preferences)
    
  return (
    <div>
        Header
        <div>
            Mode : {dark ? "Dark" : "Light"}
        </div>
        <div>
            Language : {language}
        </div>
    </div>
  )
}

export default Header