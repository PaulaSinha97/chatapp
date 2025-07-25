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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllYourFriends } from "../../../redux/reducers/friendsSliceReducer";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchFriendRequest } from "../../../redux/actions/friendsAction";
import { UserResponse } from "../../../redux/actions/userAction";
import { UserContext } from "../../../context/userContext";
// import { KeyboardArrowDown } from "@mui/material/Icon/Icon";
// import { db } from "../../../../firebase";
// import { AuthContext } from "../../context/AuthContext";
// import { ChatContext } from "../../context/ChatContext";
// import { doc } from "firebase/firestore";

export const ActiveConversations: React.FC<{
  heading: string;
  friends: UserResponse[];
}> = ({ heading, friends }) => {
  const [selectedChatId, setSelectedChatId] = useState<string>(
    friends?.[0]?.id
  );

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

  const handleSelect = (id:string) => {
    setSelectedChatId(id);
  };
  // console.log(activeUser?.name, " activeUser?.name");
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<KeyboardArrowDownIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {heading}
      </AccordionSummary>
      <AccordionDetails>
        <div className={activeConvoStyle.activeConvo}>
          {friends.map(({ name, id }) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className={
                selectedChatId === id ? activeConvoStyle.selectedChat : ""
              }
              key={name}
              onClick={() => handleSelect(id)}
            >
              {/* <Image
                src={chat[1].userInfo.photoURL}
                alt="chat"
                height="60px"
                width="60px"
              /> */}
              {/* <div>{chat[1].userInfo.displayName}</div> */}
              <p>{name}</p>
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
