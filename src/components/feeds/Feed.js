import { Avatar } from '@material-ui/core';
import React from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Feeds() {
	return (
		<div className="feed">
			<div className="feed_header">
				<h2>Home</h2>
			</div>
			<TweetBox/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
		</div>
	);
}

export default Feeds;
