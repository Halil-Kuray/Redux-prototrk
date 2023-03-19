import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import siteReducer from './features/preferences/siteSlice'

export default configureStore({
  reducer: {
    counter : counterReducer,
    preferences: siteReducer
  },
})