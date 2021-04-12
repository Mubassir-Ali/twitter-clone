import { createSlice } from "@reduxjs/toolkit";
const textMessage ="Display Name  @user 45mDownload the eBook to access new techniques to develop, deploy, and secure microservices with a cloud-native environment from IBM developer advocates."
const imageUrl="https://pbs.twimg.com/card_img/1381210633862053890/TA5EqS5Y?format=jpg&name=small"

const initialState = {
  tweet:null
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    sendTweet: (state, action) => {
      state.tweet = action.payload;
    },
  },
});

export const { sendTweet } = tweetSlice.actions;
export const selectTweet=state=>state.tweet.tweet
export default tweetSlice.reducer;
