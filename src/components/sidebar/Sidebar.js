import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Sidebar() {
	return (
		<div className="sidebar">
			<IconButton className="sidebar_twitterIcon">
            <TwitterIcon />
            </IconButton>
				
			

			<SidebarOptions active Icon={HomeIcon} text="Home" />
			<SidebarOptions Icon={SearchIcon} text="Explore" />
			<SidebarOptions Icon={NotificationsNoneIcon} text="Notification" />
			<SidebarOptions Icon={MailOutlineIcon} text="Messages" />
			<SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
			<SidebarOptions Icon={FeaturedPlayListOutlinedIcon} text="Lists" />
			<SidebarOptions Icon={PermIdentityIcon} text="Profiles" />
			<SidebarOptions Icon={MoreHorizIcon} text="More" />

			<Button fullWidth variant="outlined" className="sidebar_tweet">
				Tweet
			</Button>
		<AddCircleIcon className='sidebar_tweetPlus'/>
		</div>
	);
}

export default Sidebar;
