import { Avatar, Button, Card, Chip } from "@mui/material";
import React, { FC } from "react";
import { useAuth } from "../../providers/useAuth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Firebase_db from "../../routes/Firebase_db";

const User: FC = () => {
  const navigate = useNavigate();
  const { user, ga } = useAuth();
  // const currentUserAvatar = Firebase_db("users", 'currentUser', user?.id)[0]?.userData?.avatar
  // console.log(Firebase_db("users", 'currentUser', user?.id))
//   console.log(ga)
//   console.log(signOut)
// console.log(user?.avatar)

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
        // avatar={<Avatar alt="" src={currentUserAvatar} />}
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
