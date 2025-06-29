import React, { useContext } from "react";
import { LeftSidebar } from "./Dashboard/LeftSideBar/LeftSidebar";
import { Messages } from "./Dashboard/Messaging/Messages";
import { RightSidebar } from "./Dashboard/RightSidebar/RightSidebar";
import styles from "./DashboardStyles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { UserContext } from "../context/userContext";

// import { Box } from "@material-ui/core";

export const Dashboard = () => {
  const { data: currUserData } = useSelector(
    (state: RootState) => state.userData
  );

  return (
    <UserContext.Provider value={currUserData}>
      <div className={styles.container}>
        <div className={styles.leftSidebar}>
          <LeftSidebar />
        </div>
        <div className={styles.chat}>
          <Messages />
        </div>
        <div className={styles.rightSidebar}>
          <RightSidebar />
        </div>
      </div>
    </UserContext.Provider>
  );
};
