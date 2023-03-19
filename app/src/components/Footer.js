import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setDarkMode, setLanguage} from "../features/preferences/siteSlice"

function Footer() {
    const dispatch = useDispatch()

    const {dark, language} = useSelector((state) => state.preferences)
    const Languages = ["Tr", "En", "De"]


    const handleLanguage = (lang) =>{
        dispatch(setLanguage(lang))
    }



  return (
    <div>
        Footer
        <div>
            {Languages.map((lang,index) => (
                <button onClick={() => handleLanguage(lang)} className={lang === language ? "active" : ""} key={index}> {lang} </button>
            ))}
        </div>
        <div>
            <button onClick={() => dispatch(setDarkMode())}>
                {dark ? "Swtich to light mode" : "Swtich to dark mode"}
            </button>
        </div>

      

    </div>
  )
}

export default Footer