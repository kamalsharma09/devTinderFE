import { createSlice } from "@reduxjs/toolkit";

const connectionRequestSlice = createSlice({
    name: "connectionRequest",
    initialState: null,
    reducers: {
        addConnectionRequest: (state, action) => action.payload,
        removeConnectionRequest: (state, action) => {
            return state.filter((r) => r._id !== action.payload);
        }
    }
});

export const {addConnectionRequest, removeConnectionRequest} = connectionRequestSlice.actions;

export default connectionRequestSlice.reducer;