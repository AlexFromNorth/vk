import React, { FC } from "react";
import { useAuth } from "../../providers/useAuth";
import { Avatar, Box } from "@mui/material";

const Profile: FC = () => {
  const { user } = useAuth();
  return (
    <Box
      sx={{
        border: "1px solid #e2e2e2",
        borderRadius: "10px",
        padding: 2,
        marginTop: 4,
      }}
    >
      <Avatar src={user?.avatar}></Avatar>
      <h2>{user?.name}</h2>
    </Box>
  );
};

export default Profile;
