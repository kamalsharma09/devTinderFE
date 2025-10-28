import { createSlice } from "@reduxjs/toolkit";

const connectionRequestSlice = createSlice({
    name: "connectionRequest",
    initialState: null,
    reducers: {
        addConnectionRequest: (state, action) => action.payload,
        removeConnectionRequest: (state, action) => null
    }
});

export const {addConnectionRequest, removeConnectionRequest} = connectionRequestSlice.actions;

export default connectionRequestSlice.reducer;