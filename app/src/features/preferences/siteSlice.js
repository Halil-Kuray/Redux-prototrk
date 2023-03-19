import { createSlice } from '@reduxjs/toolkit'

export const siteSlice = createSlice({
  name: 'counter',
  initialState: {
    dark: false,
    language: "En"
  },
  reducers: {
    setDarkMode: state => {
      state.dark = !state.dark
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode, setLanguage } = siteSlice.actions

export default siteSlice.reducer