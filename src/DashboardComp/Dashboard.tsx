import React, { useContext } from "react";
import { LeftSidebar } from "./Dashboard/LeftSideBar/LeftSidebar";
import { Messages } from "./Dashboard/Messaging/Messages";
import { RightSidebar } from "./Dashboard/RightSidebar/RightSidebar";
import styles from "./DashboardStyles.module.scss";

// import { Box } from "@material-ui/core";

export const Dashboard = () => {
  return (
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
  );
};
