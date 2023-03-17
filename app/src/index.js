import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

//This is for redux setup
import store from './store' // We will give this to Provider as a parameter.
import { Provider } from 'react-redux'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)