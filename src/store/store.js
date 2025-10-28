import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";
import connectionsSlice from "./connectionsSlice";
import connectionRequestsSlice from "./connectionRequestsSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        feed: feedSlice,
        connections: connectionsSlice,
        connectionRequest: connectionRequestsSlice
    }
});

export default store;