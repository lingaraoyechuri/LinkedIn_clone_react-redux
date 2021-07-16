import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOption.css"
import { useSelector } from 'react-redux';
import {selectUser} from './features/counter/userSlice';

function HeaderOption({avatar, Icon, title, onclick}) {

    const user = useSelector(selectUser)

    return (
        <div onClick={onclick} className="headerOption">
           {Icon && <Icon className="headerOption_icon"/>}
           {avatar && <Avatar className="headerOption_icon" src={user ? user.photoUrl : "" }/>} 
           <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
