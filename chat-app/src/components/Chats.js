import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import styles from "./Chats.module.css";
import { ChatEngine } from "react-chat-engine";
import { AuthContext } from "../AuthContextProvider";
import { useHistory } from "react-router-dom";
import { authenticate } from "../firebase";
import axios from "axios";
const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();
  const logOutHandler = async () => {
    await authenticate.signOut();
    history.push("/");
  };
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "2fbe28af-1ae0-47e5-96f0-1996c26f4240",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "2778c69d-08bf-4381-b522-e179786ebee8",
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }, [user, history]);

  if (!user || loading) return "...Loading";
  return (
    <div className={styles.container}>
      <Navbar logOutHandler={logOutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="2fbe28af-1ae0-47e5-96f0-1996c26f4240"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
