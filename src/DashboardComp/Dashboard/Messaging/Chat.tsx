import React, { useEffect, useState } from "react";
import messagesStyle from "./messages.module.scss";
// import Image from "next/image";
import Profile from "../../../../Images/Profile.jpg";
import clsx from "clsx";
import { io } from "socket.io-client";
import axios from "axios";
// const socket = io('http://localhost:3001');

// import { ChatContext } from "../../context/ChatContext";
// import { AuthContext } from "../../context/AuthContext";

export const Chat: React.FC<{ msg: any }> = ({ msg }) => {
  console.log("msgmsg", msg);
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext) || {};
  // const ownerMsg =
  // message.senderId === currentUser.uid ? messagesStyle.ownerChat : {};
  // const [messages, setMessages] = useState<any>([]);
  // const [input, setInput] = useState('');
  //   useEffect(() => {
  //   // Load existing messages
  //   axios.get('http://localhost:3001/chat').then((res:any) => {
  //     setMessages(res.data?.[0]?.messages);
  //   });

  //   // Listen for real-time messages
  //   socket.on('newMessage', (msg:any) => {
  //     setMessages((prev:any) => [...prev, msg]);
  //   });

  //   return () => {
  //     socket.off('newMessage');
  //   };
  // }, []);

  return (
    // <div className={clsx(messagesStyle.chat, ownerMsg)}>
    <div className={clsx(messagesStyle.chat)}>
      <div className={messagesStyle.messageInfo}>
        {/* <Image
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="chatPic"
          height="60px"
          width="60px"
          className={messagesStyle.avatar}
        /> */}
        <span>Just now</span>
      </div>
      <div className={messagesStyle.messageContent}>
        <p>{msg}</p>
        {/* <p>{message.text}</p> */}
        {/* <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  );
};
