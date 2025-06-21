import React, { useState } from "react";
import { UserProfile } from "./UserProfile";
import { ActiveConversations } from "./ActiveConversations";
// import { Box } from "@material-ui/core";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "../../../redux/actions/userAction";
import { RootState } from "../../../redux/store";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3001", {
//   transportOptions: {
//     polling: {
//       extraHeaders: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTZiYWQ3Y2E1NzNiMDMwYWFkOThiZCIsImlhdCI6MTc1MDUzMjY3NSwiZXhwIjoxNzUwNTM2Mjc1fQ.leLbpZFgwzBCiouCqJGTNgy5qvlDfs2f8tWcq5HIICk", // 'Bearer h93t4293t49jt34j9rferek...'
//       },
//     },
//   },
// });

export const LeftSidebar = () => {
  const [currUser, setCurrUser] = useState("");
  const [userName, setUserName] = useState([]);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.userData
  );

  console.log("data", data, loading, error);
  React.useEffect(() => {
    getUserList();
  }, []);

  React.useEffect(() => {
    if (data.name) {
      setCurrUser(data.name);
    }
  }, [data]);

  function getUserList() {
    dispatch(fetchRequest());
  }

  function findRoomAndOpenChat(item: any) {
    //  const getRoomByService();
  }

  // function getRoomByService(users: any) {
  //   fetch("http://localhost:3001/getRoomId", {
  //     method: "POST",
  //     body: { users },
  //     headers: {
  //       Accept: "application/json,",
  //       "Content-Type": "application/json; charset=UTF-8",
  //       // 'Content-Length': Buffer.byteLength(data),
  //       // 'Cookie': cookies,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {});
  // }

  return (
    <>
      <UserProfile currUser={currUser} />
      <Search />
      <div>
        {userName?.map((m: any, index) => {
          return (
            <b
              style={{
                backgroundColor: "#f0f0f0",
                margin: "10px",
                borderRadius: "5px",
              }}
              onClick={(e) => findRoomAndOpenChat(e)}
            >
              {m.name} <br></br>
            </b>
          );
        })}
      </div>

      {/* <ActiveConversations heading="Active conversation" />
      <ActiveConversations heading="Archived conversation" /> */}
    </>
  );
};
