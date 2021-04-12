import { Avatar, IconButton } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

import {useSelector} from 'react-redux'
import {selectTweet} from '../../features/tweetSlice'
import db from '../../firebase'

const Post=({data:{avatar,imageURL,displayName,userName,message}})=> {


	// const {avatar,imageURL,displayName,userName,message}=useSelector(selectTweet)

console.log(displayName);


	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar src={avatar} />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							{displayName}{' '}
							<span className="verifiedUser">
								<VerifiedUserIcon /> @{userName} 45m
							</span>
						</h3>
						<IconButton>
							<MoreHorizIcon />
						</IconButton>
					</div>
					<div className="post__headerDescription">
						<p>
						{message}
						</p>
					</div>
				</div>

				<img src={imageURL} alt="" />
                <div className="post__footer">
                <IconButton><ModeCommentOutlinedIcon/></IconButton>
                <IconButton><RepeatOutlinedIcon/></IconButton>
                <IconButton><FavoriteBorderOutlinedIcon/></IconButton>
                <IconButton><PublishOutlinedIcon/></IconButton>

                </div>
			</div>
		</div>
	);
}

export default Post;
