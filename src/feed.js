import React, {useState, useEffect} from 'react'
import { Avatar} from '@material-ui/core'
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import "./feed.css"
import photo from "./photo.jpg";
import InputOptions from './inputOptions';
import Post from './post';
import { db } from "./firebase";
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import {selectUser} from './features/counter/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setinput] = useState("");
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot)=>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        });

        setinput("");
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className= "feed_input_top">
                    <Avatar className="feed_avatar" src={user.photoUrl}/>
                    <div className= "feed_input"> 
                         
                        <form>
                            <input type="text" value = {input} onChange={e => setinput(e.target.value)} placeholder="start a post"/>
                            <button onClick ={sendPost} type="submit">send</button>
                        </form>
                    </div>
                </div>

                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} name="Photo" color="pink"/>
                    <InputOptions Icon={SubscriptionsIcon} name="Video" color="pink"/>
                    <InputOptions Icon={EventNoteIcon} name="Event" color="pink"/>
                    <InputOptions Icon={CalendarViewDayIcon} name="Write article" color="pink"/>
                </div>

            </div>
             <FlipMove>
                {posts.map(({id, data:{name, description, message, photoUrl}})=>(
                    <Post
                        key={id}
                        name={name}
                        description = {description}
                        message = {message}
                        photoUrl = {photoUrl}
                    />
                  )
                
                )}
            </FlipMove>   
               

        </div>
    )
}

export default Feed
