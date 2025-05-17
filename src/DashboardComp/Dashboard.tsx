import React, { useContext, useEffect, useState } from "react";
import { LeftSidebar } from "./Dashboard/LeftSideBar/LeftSidebar";
import { Messages } from "./Dashboard/Messaging/Messages";
import { RightSidebar } from "./Dashboard/RightSidebar/RightSidebar";
import styles from "./DashboardStyles.module.scss";
import axios from "axios";

// import { Box } from "@material-ui/core";

export const Dashboard = () => {

//   const [userData,setUserData] = useState();

// useEffect(()=>{
//   const userId = sessionStorage.getItem("id")
//     axios.get(`http://localhost:3001/users/${userId}`).then((res:any) => {
//       setUserData(res.data);
//     });
// },[]);



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
