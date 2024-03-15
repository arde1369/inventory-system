import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterStore = createSlice({
    name : 'counter',
    initialState : { 
        counter : 0, 
        showCounter : true 
    },
    reducers : {
        increment (state) {
            state.counter++
        },
        decrement (state) {
            state.counter--
        },
        increase (state, action) {
            state.counter = state.counter+action.payload
        },
        toggleCounter (state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterStore.actions
export default counterStore.reducer