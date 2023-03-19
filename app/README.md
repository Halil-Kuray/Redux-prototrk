# redux

1) index.js configurations
    <Provider store={store}>
      <App />
    </Provider>

2) inside of store or fetures folder create xxxSlice.js
    define your state
    create your setState functions

3) Create a store.js in src folder

        import { configureStore } from '@reduxjs/toolkit'
        import counterReducer from './features/counter/counterSlice'

        export default configureStore({
        reducer: {
            counterxxxxx : counterReducer
        },
        })

4) Usage
    If you need to use state, import useSellector  
        useSellector((state) => state.counterxxxxx.value)
    
    If you need to use setState import useDispatch
        useDispatch(yourFunc())