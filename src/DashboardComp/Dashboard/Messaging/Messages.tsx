import React, { useContext, useEffect, useState } from "react";
import { Chat } from "./Chat";
import messagesStyle from "./messages.module.scss";
import { Input } from "./InputMessage";
// import { ChatContext } from "@/app/context/ChatContext";
// import { onSnapshot, doc } from "firebase/firestore";
// import { db } from "../../../../firebase";
// import { ChatContext } from "../../context/ChatContext";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  // const { data } = useContext(ChatContext) || {};

  // useEffect(() => {
  //   if (data) {
  //     const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
  //       doc.exists() && setMessages(doc.data().messages);
  //     });

  //     return () => {
  //       unSub();
  //     };
  //   }
  // }, [data]);

  console.log("messages", messages);

  return (
    <>
      <div className={messagesStyle.messages}>
        {messages?.map((m) => (<></>
          // eslint-disable-next-line react/jsx-key
          // <Chat message={m} key={9} />
        ))}
      </div>
      <Input />
    </>
  );
};
