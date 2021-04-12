import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:null

}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login:(state,action)=>{
            state.user=action.payload
        },
        logOut:state=>{
            state.user=null
        }
    }
});

export const {login,logOut} = UserSlice.actions
export const selectUser=state=>state.user.user
export default UserSlice.reducer