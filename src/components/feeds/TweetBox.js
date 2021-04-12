import { Avatar, Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import PublicIcon from "@material-ui/icons/Public";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifIcon from "@material-ui/icons/Gif";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/userSlice";
import {sendTweet} from '../../features/tweetSlice'
import db from '../../firebase'

function TweetBox() {
  const [message, setMessage] = useState("");
  const [imageURL,setImageURL]=useState('')
  const { photo,displayName } = useSelector(selectUser);

  const userFullName=displayName.split(' ')
  const userName=userFullName[0].toLowerCase()



  const dispatch = useDispatch();

const imageUrl=()=>{
	const url=prompt("Enter Image URL")
	if(url){
		setImageURL(url)
	}
	
}

const tweet=()=>{

  db.collection('tweets').add({
    avatar:photo,
		imageURL,
		displayName,
		userName,
		message
  })



	dispatch(sendTweet({
		avatar:photo,
		imageURL,
		displayName,
		userName,
		message
	}))
setImageURL('')
setMessage('')

  
}

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={photo} />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's happening?"
          />
        </div>

        <div className="publicIcon">
          <PublicIcon />
          <h2>Everyone can reply</h2>
        </div>
        <div className="tweetBox__buttons">
          <div className="tweetBox__icons">
            <IconButton><ImageOutlinedIcon onClick={imageUrl} /></IconButton>
            <IconButton><GifIcon /></IconButton>
            <IconButton><PollOutlinedIcon /></IconButton>
            <IconButton><SentimentSatisfiedOutlinedIcon /></IconButton>
            <IconButton><EventOutlinedIcon /></IconButton>
          </div>

          {message ? (
            <Button onClick={tweet} variant="outlined" className="tweetBox__tweetButton">
              Tweet
            </Button>
          ) : (
            <Button disabled className="tweetBox__tweetButtonDisable">
              Tweet
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
