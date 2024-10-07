import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IGif } from "../../types/gif"

interface IInitialState {
    gif: IGif[]
}

const initialState: IInitialState = {
    gif: []
}

const gifsSlice = createSlice({
    name: 'gifState',
    initialState,
    reducers: {
        setGifs: (state, action: PayloadAction<IGif[]>) => {
            state.gif = action.payload
        },
        resetGifs : (state) => {
            state.gif = []
        }
    },
})

export const { setGifs, resetGifs } = gifsSlice.actions;
export default gifsSlice.reducer;