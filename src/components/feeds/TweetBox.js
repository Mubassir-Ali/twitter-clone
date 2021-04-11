import { Avatar, Button, IconButton } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';
import PublicIcon from '@material-ui/icons/Public';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifIcon from '@material-ui/icons/Gif';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

function TweetBox() {
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar />
					<input type="text" placeholder="What's happening?" />
				</div>
				
                <div className="publicIcon">
						<PublicIcon />
						<h2>Everyone can reply</h2>
					</div>
				<div className="tweetBox__buttons">				
                    <div className="tweetBox__icons">
                        <IconButton><ImageOutlinedIcon/></IconButton>
                        <IconButton><GifIcon/></IconButton>
                        <IconButton><PollOutlinedIcon/></IconButton>
                        <IconButton><SentimentSatisfiedOutlinedIcon/></IconButton>
                        <IconButton><EventOutlinedIcon/></IconButton>
                    </div>

					<Button variant="outlined" className="tweetBox__tweetButton">
						Tweet
					</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
