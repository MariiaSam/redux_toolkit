import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

const myReducer = createReducer(10, {
    
})

export const store = configureStore ({
reducer: {
    myValue: myReducer
}
})

// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {},
// })