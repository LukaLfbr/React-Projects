import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state, action) {
            state.count++
        },
        reset(state, action) {
            state.count = 0;
        },
        incrementOf(state, action) {
            state.count += action.payload.amount
        }
    }
})

export const {
    increment,
    reset,
    incrementOf
} = counterSlice.actions

export default counterSlice.reducer;