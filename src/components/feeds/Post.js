import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

function Post() {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							Display Name{' '}
							<span className="verifiedUser">
								<VerifiedUserIcon /> @user 45m
							</span>
						</h3>
						<IconButton>
							<MoreHorizIcon />
						</IconButton>
					</div>
					<div className="post__headerDescription">
						<p>
							Download the eBook to access new techniques to develop, deploy, and secure microservices
							with a cloud-native environment from IBM developer advocates.
						</p>
					</div>
				</div>

				<img src="https://pbs.twimg.com/card_img/1381210633862053890/TA5EqS5Y?format=jpg&name=small" alt="" />
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
