import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
    count: number
}

const initialState : ICounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return { count: state.count + 1 }
        },
        decrement: (state) => {
            return { count: state.count - 1 }
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.count
export const counterReducer = counterSlice.reducer