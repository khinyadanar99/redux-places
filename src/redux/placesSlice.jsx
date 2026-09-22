import places from "../data.json"
import { createSlice } from "@reduxjs/toolkit";

const placesSlice = createSlice({
    name: "places",
    initialState: {
        places: places,
        randomPlaceId: null,
    },
    
    reducers: {
        toggleVisited: (state, action) => {
            const place = state.places.find(
                (place) => place.id === action.payload
            );

            if (place) {
                place.isVisited = !place.isVisited;
            }
        },

        suggestRandomPlace: (state) => {
            const randomIndex = Math.floor(
                Math.random() * state.places.length
            );

            state.randomPlaceId = state.places[randomIndex].id;
        },
    },
});

export const {toggleVisited, suggestRandomPlace} = placesSlice.actions;
export default placesSlice.reducer; 