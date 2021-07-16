import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import Header from './Header';
import Widgets from './widgets';
import Sidebar from './sidebar';
import Feed from './feed';
import Login from './Login';
import {useSelector} from 'react-redux';
import {login, logout, selectUser} from './features/counter/userSlice';
import {auth} from "./firebase";


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{

      if(userAuth){

        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }
      else{
        dispatch(logout());
      }

    })

  }, [])

  return (
    <div className="app">
      {/*Header */}
      <Header/>
      {!user ? (<Login/>): (
        
        <div className="app_body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>

        )}

    </div>
  );
}

export default App;
