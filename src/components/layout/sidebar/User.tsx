import { Avatar, Button, Card, Chip } from "@mui/material";
import React, { FC } from "react";
import { useAuth } from "../../providers/useAuth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const User: FC = () => {
  const navigate = useNavigate();
  const { user, ga } = useAuth();
//   console.log(ga)
//   console.log(signOut)
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        backgroundColor: "#F1F7FA",
        border: "none",
        borderRadius: 3,
        marginBottom: 5,
      }}
      
    >
      <Chip
        label={user?.name || "Without a name"}
        variant="outlined"
        avatar={<Avatar alt="" src={user?.avatar} />}
        sx={{ display: "flex", marginBottom: 2 }}
        onClick={() => {
          navigate('/profile')
      }}
      />
      <Button
        onClick={() => {
            signOut(ga);
            navigate('/auth')
        }}
      >
        Выйти
      </Button>
    </Card>
  );
};

export default User;
