import React, { useContext } from "react";
// import Image from "next/image";
import Chat from "../../../../Images/Chat.jpg";
// import Profile from "../../../../Images/Profile.jpg";
import userStyles from "./userProfile.module.scss";
// import { AuthContext } from "../../context/AuthContext";

export const UserProfile = () => {
  // const { currentUser } = useContext(AuthContext) || {};
  // console.log("currentUsercurrentUser", currentUser);
  return (
    <>
      <div className={userStyles.logo}>
        {/* <Image src={Chat} alt="chatPic" height="40px" width="40px" /> */}
        <span className={userStyles.chat}> QuickChat</span>
      </div>
      <div className={userStyles.userProfileBox}>
        {/* <Image
          src={currentUser?.photoURL}
          alt="chatPic"
          height="100px"
          width="100px"
          className={userStyles.profile}
        /> */}
        {/* <div>{currentUser?.displayName || "Tushar"}</div> */}
        <div>Lead ui/ux developer</div>
        <div> Active</div>
      </div>
    </>
  );
};
