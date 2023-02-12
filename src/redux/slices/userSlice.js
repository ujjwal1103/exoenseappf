import {createSlice} from '@reduxjs/toolkit'
const initialState =  JSON.parse(localStorage.getItem("user"));
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        add(state,action) {
            state = action.payload
            return state 
        },
        remove(state,action){
            state = action.payload
            return state
        }
    }
})
export const {add,remove} = userSlice.actions;

export default userSlice.reducer;

