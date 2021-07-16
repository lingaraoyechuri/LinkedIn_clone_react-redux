import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import "./Header.css"
import photo from "./photo.jpg";
import HeaderOption from "./HeaderOption";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from './firebase';
import { logout} from './features/counter/userSlice';
import {useDispatch} from 'react-redux';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header_left">
                <LinkedInIcon className="icon"/> 
                <div className="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header_right">
              <HeaderOption Icon={HomeIcon} title="Home"/>
              <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
              <HeaderOption Icon={BusinessCenterIcon} title="Business center"/>
              <HeaderOption Icon={ChatIcon} title="chat"/>
              <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
              <HeaderOption avatar={photo} title="me" onclick={logoutOfApp}/>
            </div>
            
        </div>
    )
}

export default Header
