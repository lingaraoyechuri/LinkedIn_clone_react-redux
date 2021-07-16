import React, {forwardRef, useState} from 'react'
import { Avatar} from '@material-ui/core'
import "./post.css"
import InputOptions from './inputOptions';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';


const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
   
    
    return (
        <div ref = {ref} className="post">
            <div className="post_Header">
                <Avatar src={photoUrl}/>
                <div className="post_autherinfo">
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>  
            </div>

            <div className="post_body">
                <p>{message }</p>
            </div>

            <div className="post_buttons">
                <InputOptions Icon={ThumbUpAltOutlined} name="like" color="gray"/>
                <InputOptions Icon={ChatOutlined} name="comment" color="gray"/>
                <InputOptions Icon={ShareOutlined} name="share" color="gray"/>
                <InputOptions Icon={SendOutlined} name="send" color="gray"/>
            </div>
        </div>
    )
});

export default Post
