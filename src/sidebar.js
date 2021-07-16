import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import photo from "./photo.jpg";
import "./sidebar.css"
import {selectUser} from './features/counter/userSlice';
import { useSelector } from 'react-redux';



function Sidebar() {
   
    const [items, setItems] = useState(["india", "react js", "node js", "developer"]);
    const user = useSelector(selectUser)

    return (
        <div className="sidebar">

            <div className="sidebar_top">
                <img src="https://images.squarespace-cdn.com/content/v1/562fe18ae4b05dd9906012a5/1470601729168-50OF54AFTH2PZUDYI2LW/ke17ZwdGBToddI8pDm48kJa9emWqt3q2USou2eNsF1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0q7uY_gEAXjzYg1fYWS2heQ_l-AhWCsVpEI1WwEHbjuY9OkMhyTpDs17-ePIShVPJw/solid-pink-banner.jpg?format=1500w" alt=""/>
                <Avatar className="sidebar_avatar" src={user.photoUrl}/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar_statNumber">56</p>
                </div>
                <div className="sidebar_stat">
                    <p>Connections</p>
                    <p className="sidebar_statNumber">159</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p> Recent</p>
                <div>
                    {items.map((product, index) => (
                        <div class="sidebar_bottomitem">
                            <p className="sidebar_hash">#</p>
                            <p>{product}</p>
                        </div>
                    ))}
                 </div>
            </div>

            
        </div>
    )
}

export default Sidebar
