import React, { FC } from "react";
import AddFriend from "./AddFriend";
import { Box } from "@mui/material";
import Characters from "./Characters";


const Friends: FC = () => {



  return (
    <>
      <Box>
        <AddFriend />
        <Characters />
      </Box>
    </>
  );
};

export default Friends;
