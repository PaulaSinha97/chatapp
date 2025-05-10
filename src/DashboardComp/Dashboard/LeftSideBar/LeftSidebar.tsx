import React from "react";
import { UserProfile } from "./UserProfile";
import { ActiveConversations } from "./ActiveConversations";
// import { Box } from "@material-ui/core";
import Search from "./Search";

export const LeftSidebar = () => {
  return (
    <>
      <UserProfile />
      <Search />
      {/* <ActiveConversations heading="Active conversation" />
      <ActiveConversations heading="Archived conversation" /> */}
    </>
  );
};
