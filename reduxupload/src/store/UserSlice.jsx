import { createSlice } from "@reduxjs/toolkit";
import {delelteusers} from "./actions/action";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
        //here action.payload give id and in second arug* Hoe many qty;
        let userindexnum = state.indexOf(action.payload)
        state.splice(userindexnum,1)
    },
    // deleteUsers(state, action) {
    //     return [];
    // },
  },
  extraReducers(builder){
    builder.addCase(delelteusers,()=>{
        return [];
    })
  }
});

//if action is supposed to be handled by one reducer, use reducers.
//if action is supposed to be handled by multiple reducers, use extraReducers.


export default UserSlice.reducer;
// Action creators are generated for each case reducer function
export const { addUser, removeUser} = UserSlice.actions;
