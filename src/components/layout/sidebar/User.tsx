import { Avatar, Button, Card, Chip } from "@mui/material";
import React, { FC } from "react";
import { useAuth } from "../../providers/useAuth";
import { signOut } from "firebase/auth";

const User: FC = () => {
  const { user, ga } = useAuth();
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        backgroundColor: "#F1F7FA",
        border: "none",
        borderRadius: 3,
      }}
    >
      <Chip
        label={user?.name || 'без имени'}
        variant="outlined"
        avatar={<Avatar alt="" src={user?.avatar} />}
        sx={{display: 'flex', marginBottom: 2,}}
      />
      <Button onClick={()=>signOut(ga)}>Выйти</Button>
    </Card>
  );
};

export default User;
