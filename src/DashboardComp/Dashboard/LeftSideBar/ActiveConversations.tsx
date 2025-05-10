import React, { useContext, useEffect, useState } from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@material-ui/core";
// import Image from "next/image";
// import Person from "../../../../Images/Person.jpg";
import activeConvoStyle from "./userProfile.module.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
// import { KeyboardArrowDown } from "@material-ui/icons";
// import { db } from "../../../../firebase";
// import { AuthContext } from "../../context/AuthContext";
// import { ChatContext } from "../../context/ChatContext";
// import { doc } from "firebase/firestore";

export const ActiveConversations: React.FC<{ heading: string }> = ({
  heading,
}) => {
  const [chats, setChats] = useState([]);

  // const { currentUser } = useContext(AuthContext);
  // const { dispatch } = useContext(ChatContext);

  // useEffect(() => {
  //   if (currentUser.uid) {
  //     const unsub = onSnapshot(
  //       doc(db, "userChats", currentUser.uid),

  //       (doc) => {
  //         console.log("PPPPPPPPPPPPPP", doc.data(), currentUser.uid);
  //         setChats(doc.data());
  //       }
  //     );

  //     return () => {
  //       unsub();
  //     };
  //   }
  // }, [currentUser?.uid]);
  // console.log("baharś", chats, currentUser.uid);

  // const handleSelect = (u) => {
    // dispatch({ type: "CHANGE_USER", payload: u });
  // };

  return (
    <Accordion>
      <AccordionSummary
        // expandIcon={<KeyboardArrowDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {heading}
      </AccordionSummary>
      <AccordionDetails>
        <div className={activeConvoStyle.activeConvo}>
          {Object.values(chats).map((chat) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className={activeConvoStyle.selectedChat}
              key={chat[0]}
              // onClick={() => handleSelect(chat[1].userInfo)}
            >
              {/* <Image
                src={chat[1].userInfo.photoURL}
                alt="chat"
                height="60px"
                width="60px"
              /> */}
              {/* <div>{chat[1].userInfo.displayName}</div>
              <p>{chat[1].lastMessage?.text}</p> */}
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
