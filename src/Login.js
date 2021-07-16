import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './Login.css';
import {auth} from "./firebase";
import {login} from  "./features/counter/userSlice";

function Login() {

    const[email, setEmail] =  useState("");
    const[Password, setPassword] =  useState("");
    const[name, setName] =  useState("");
    const[profilePic, setprofilePic] =  useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, Password).then(
            (userAuth) =>{
                dispatch(
                    login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:userAuth.user.displayName,
                        photoURL:userAuth.user.photoURL
                    })
                )
            }
        ).catch((error) => alert(error));
    };

    const register = () => {
        if(!name){
            return alert("please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, Password).then(
            (userAuth) =>{
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                }).then(()=>{
                    dispatch(
                        login({
                        email: userAuth.user.email,
                        uid : userAuth.user.uid,
                        displayName : name,
                        photoURL: profilePic,
                    }))
                }) 
            }
        ).catch((error)=> alert(error));

    };

    return (
        <div className="login">
            <img src="https://www.cnm.edu/depts/mco/marketing/images/linkedin-logo.png/@@images/image.jpeg"/>
            <form>
                <input placeholder="Full name(if regestring)" value={name} onChange={e => setName(e.target.value)} type="text"/>
                <input placeholder="profile pic URL(optional)" value={profilePic}  onChange={e => setprofilePic(e.target.value)}/>
                <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Password" type="password" value={Password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={loginToApp} type="submit">Sign In</button>
            </form>
            <p>
                Not a memebr?{" "}
                <span onClick={register} className="login_register">Register Now</span>
            </p>
        </div>
    )
}

export default Login
