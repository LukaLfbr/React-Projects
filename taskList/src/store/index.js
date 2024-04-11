import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice.js";
import taskSlice from "./Slice/taskSlice.js";
import citiesSlice from "./Slice/citiesSlice.jsx";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        tasks: taskSlice,
        city: citiesSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        //Middleware personnalisé
    ])
})

export default store