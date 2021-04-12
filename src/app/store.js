import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import tweetReducer from '../features/tweetSlice'


export const store=configureStore({
    reducer:{
        user:userReducer,
        tweet:tweetReducer
    }
})