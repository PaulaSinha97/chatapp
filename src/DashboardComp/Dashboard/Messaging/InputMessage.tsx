/* eslint-disable react/jsx-no-undef */
import React, { useContext, useState } from "react";
import messagesStyle from "./messages.module.scss";
// import Image from "next/image";
import Attach from "../../../../Images/Attach.png";
import clsx from "clsx";
import { io } from "socket.io-client";
import axios from "axios";
// const socket = io('http://localhost:3001');
// import { AuthContext } from "../../../app/context/AuthContext";
// import { ChatContext } from "../../../app/context/ChatContext";
// import {
//   arrayUnion,
//   doc,
//   serverTimestamp,
//   Timestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { db, storage } from "../../../../firebase";
// import { v4 as uuid } from "uuid";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const socket = io("http://localhost:3001", {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTZiYWQ3Y2E1NzNiMDMwYWFkOThiZCIsImlhdCI6MTc1MDUzMjY3NSwiZXhwIjoxNzUwNTM2Mjc1fQ.leLbpZFgwzBCiouCqJGTNgy5qvlDfs2f8tWcq5HIICk", // 'Bearer h93t4293t49jt34j9rferek...'
      },
    },
  },
});

export const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState(
    "User" + Math.floor(Math.random() * 1000)
  );

  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext) || {};

  const sendMessage = () => {
    if (!input) return;
    socket.emit("sendMessage", {
      senderId: "123",
      message: input,
      roomId: "edbe8cfa-1114-4046-a6fb-3147847bc87f",
    });
    setInput("");
  };

  const handleSend = async () => {
    if (img) {
      // const storageRef = ref(storage, uuid());
      // const uploadTask = uploadBytesResumable(storageRef, img);
      // uploadTask.on(
      //   (error) => {
      //     //TODO:Handle Error
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //       await updateDoc(doc(db, "chats", data.chatId), {
      //         messages: arrayUnion({
      //           id: uuid(),
      //           text,
      //           senderId: currentUser.uid,
      //           date: Timestamp.now(),
      //           img: downloadURL,
      //         }),
      //       });
      //     });
      //   }
      // );
    } else {
      // await updateDoc(doc(db, "chats", data.chatId), {
      //   messages: arrayUnion({
      //     id: uuid(),
      //     text,
      //     senderId: currentUser.uid,
      //     date: Timestamp.now(),
      //   }),
      // });
    }

    // await updateDoc(doc(db, "userChats", currentUser.uid), {
    //   [data.chatId + ".lastMessage"]: {
    //     text,
    //   },
    //   [data.chatId + ".date"]: serverTimestamp(),
    // });

    // await updateDoc(doc(db, "userChats", data.user.uid), {
    //   [data.chatId + ".lastMessage"]: {
    //     text,
    //   },
    //   [data.chatId + ".date"]: serverTimestamp(),
    // });

    // setText("");
    // setImg(null);
  };
  return (
    <div className={messagesStyle.inputMsg}>
      <div className={messagesStyle.send}>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          // onChange={(e) => setImg(e?.target?.files?.[0])}
        />
        <label htmlFor="file">
          {/* <Image src={Attach} width={20} height={20} alt="file" /> */}
        </label>
      </div>
      <input
        type="text"
        placeholder="Enter your message here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        // onKeyDown=÷÷{(e) => e.key === 'Enter'}
        style={{ width: "80%", marginTop: 10 }}
      />
      <button className={messagesStyle.sendButton} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};
