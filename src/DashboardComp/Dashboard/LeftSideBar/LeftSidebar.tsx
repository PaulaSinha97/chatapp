import React, { useContext, useState } from "react";
import { UserProfile } from "./UserProfile";
import { ActiveConversations } from "./ActiveConversations";
// import { Box } from "@material-ui/core";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest, UserResponse } from "../../../redux/actions/userAction";
import { RootState } from "../../../redux/store";
import { fetchFriendRequest } from "../../../redux/actions/friendsAction";
import { UserContext } from "../../../context/userContext";

export const LeftSidebar = () => {
  const [currUser, setCurrUser] = useState("");
  const [userName, setUserName] = useState([]);
  const [friends, setFriends] = useState<{
    active: UserResponse[];
    new: UserResponse[];
  }>({ active: [], new: [] });

  const dispatch = useDispatch();

  const { data: friendsList } = useSelector(
    (state: RootState) => state.friendsData
  );
  const activeUser = useContext(UserContext);

  console.log("friendsList", friendsList);
  // const {
  //   loading,
  //   data: currUserData,
  //   error,
  // } = useSelector((state: RootState) => state.userData);

  // console.log("data", currUserData, loading, error);
  React.useEffect(() => {
    dispatch(fetchFriendRequest());
    dispatch(fetchRequest());
  }, []);

  React.useEffect(() => {
    if (activeUser?.name) {
      setCurrUser(activeUser.name);
    }
  }, [activeUser]);

  React.useEffect(() => {
    if (friendsList) {
      setFriends({ new: friendsList, active: [] });
    }
  }, [friendsList]);

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
      <ActiveConversations
        heading="Active conversation"
        friends={friends.active}
      />
      <ActiveConversations
        heading="Chat with new people"
        friends={friends.new}
      />
    </>
  );
};
