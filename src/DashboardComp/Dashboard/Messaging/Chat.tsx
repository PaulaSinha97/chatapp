import React, { useContext } from "react";
import messagesStyle from "./messages.module.scss";
// import Image from "next/image";
import Profile from "../../../../Images/Profile.jpg";
import clsx from "clsx";
// import { ChatContext } from "../../context/ChatContext";
// import { AuthContext } from "../../context/AuthContext";

export const Chat = () => {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext) || {};
  // const ownerMsg =
  // message.senderId === currentUser.uid ? messagesStyle.ownerChat : {};
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
        {/* <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  );
};
