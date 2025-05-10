/* eslint-disable react/jsx-no-undef */
import React, { useContext, useState } from "react";
import messagesStyle from "./messages.module.scss";
// import Image from "next/image";
import Attach from "../../../../Images/Attach.png";

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

export const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext) || {};

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

    setText("");
    setImg(null);
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
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className={messagesStyle.sendButton} onClick={handleSend}>
        Send
      </button>
    </div>
  );
};
