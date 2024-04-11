import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchTown = createAsyncThunk(
    "cities/fetchTown",
    async (data) => {
        const response = await axios.get(`https://api-adresse.data.gouv.fr/search?q=${data}&type=municipality`)
        return response.data
    }
)

const citiesSlice = createSlice({
    name: "cities",
    initialState: {
        proposals: [],
        status: 'idle' // 'idle' | 'pending'
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTown.fulfilled, (state, action) => {
            console.log(action.payload)
            state.proposals = action.payload.features.map(feature => feature.properties.name)
            state.status = 'idle'
        })
        builder.addCase(fetchTown.pending, (state, action) => {
            state.status = 'pending'
        })
    }
})

export const {

} = citiesSlice.actions;

export default citiesSlice.reducer;