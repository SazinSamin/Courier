import { auth } from "../firebaseConfig";
import "../index.css";
import { ChatEngine } from "react-chat-engine";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchBlob } from "../utils.js/fetchBlob";
import LoadingPage from "./LoadingPage";

const Chats = () => {


  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();



  const navigate = useNavigate();

  const handLogout = async () => {
    await auth.signOut();
    navigate("/");
  }



  useEffect(() => {
    if(!user) {
      navigate("/");
      return;
    }
    console.log(user);
    axios.get('https://api.chatengine.io/users/me', {
      headers : {
        'project-id' : '19d333ac-b455-40c9-9971-b0f907e830ac',
        'user-name' : user.displayName,
        'user-secret' : user.uid,
      }
    }
    ).then(() => {
      setIsLoading(false);


    }).catch(() => {
      let formdata = new FormData();
      formdata.append('email', user.email);
      formdata.append('username', user.displayName);
      formdata.append('secret', user.uid);

      fetchBlob(user.photoURL).then((avatar) => {
        formdata.append('avatar', avatar, avatar.name); 

        axios.post('https://api.chatengine.io/users', 
          formdata, 
          { headers : {
            "private-key" : "e58162d5-d9a6-4dad-afde-4baa982b249f"
          }}
        ).then(() => {
          setIsLoading(false);
          console.log('formdata', formdata);
        })
         .catch(e => console.log(e));
      })
    })
    

  }, [navigate, user])


  if(isLoading) return <div><LoadingPage /></div>

  return <div className="chats-page">
    <div className="nav-bar">
      <div className="logo-tab">
        Courier
      </div>
      <div onClick={handLogout} className="logout-tab">
        Log Out
      </div>
    </div>

    <ChatEngine 
      height="calc(100vh - 66px)"
      projectID="19d333ac-b455-40c9-9971-b0f907e830ac"
      userName={user.displayName}
      userSecret={user.uid}
    />

  </div>
}

export default Chats;