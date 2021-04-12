import { Avatar } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

import { selectTweet } from "../../features/tweetSlice";
import { useSelector } from "react-redux";
import db from '../../firebase'

function Feeds() {
  const tweet = useSelector(selectTweet);

  const [tweets, setTweets] = useState([])
	useEffect(()=>{
		db.collection('tweets').onSnapshot((snapshot)=>setTweets(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()}))))
	},[tweet])


  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox className="tweetBox" />
      {tweets.map(({id,data})=> <Post key={id} data={data}/>)}
    </div>
  );
}

export default Feeds;
