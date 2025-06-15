import React, { useState } from "react";
import { UserProfile } from "./UserProfile";
import { ActiveConversations } from "./ActiveConversations";
// import { Box } from "@material-ui/core";
import Search from "./Search";

export const LeftSidebar = () => {
  const [userName, setUserName] = useState([]);

  React.useEffect(() => {
    getUserList();
  }, []);

  function getUserList() {
    fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        Accept: "application/json,",
        "Content-Type": "application/json; charset=UTF-8",
        // 'Content-Length': Buffer.byteLength(data),
        // 'Cookie': cookies,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName(data);
      });
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
      <UserProfile />
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
