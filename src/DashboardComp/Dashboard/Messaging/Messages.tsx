import React, { useContext, useEffect, useState } from "react";
import { Chat } from "./Chat";
import messagesStyle from "./messages.module.scss";
import { Input } from "./InputMessage";
import { io } from "socket.io-client";
import axios from "axios";
const socket = io("http://localhost:3001");
// import { ChatContext } from "@/app/context/ChatContext";
// import { onSnapshot, doc } from "firebase/firestore";
// import { db } from "../../../../firebase";
// import { ChatContext } from "../../context/ChatContext";

export const Messages = () => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    // Load existing messages
    axios.get("http://localhost:3001/chat").then((res: any) => {
      setMessages(res.data?.[0]?.messages);
    });

    // Listen for real-time messages
    socket.on("newMessage", (msg: any) => {
      console.log("newww", msg);
      setMessages((prev: any) => [...prev, msg]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  console.log("messages", messages);

  return (
    <>
      <div className={messagesStyle.messages}>
        {messages?.map((m: any, index: any) => {
          console.log("mmm", m);
          return <Chat key={index} msg={m?.message} />;
        })}
      </div>
      <Input />
    </>
  );
};
