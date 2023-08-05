import {
  Avatar,
  Box,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { QuestionAnswer } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Firebase_db from "../../routes/Firebase_db";
// import { users } from "./DataUsers";

const UserItems: FC = () => {
  const navigate = useNavigate();

  // console.log(Firebase_db('users'))
  Firebase_db("users").forEach((user) => {
    // console.log(user.userData.uid);
  });

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        border: "none",
        borderRadius: 3,
        backgroundColor: "#F1F7FA",
        marginBottom: 5,
      }}
    >
      {Firebase_db("users").map((user) => (
        <Link
          key={user.userData.uid}
          to={`/profile/${user.userData.uid}`}
          style={{
            display: "flex",
            alignItems: "center",
            color: "#111",
            marginBottom: 12,
          }}
        >
          <Box
            sx={{
              position: "relative",
              marginRight: 2,
              width: 50,
              height: 50,
            }}
          >
            <Avatar
              alt="avatar"
              src={user.userData.avatar}
              sx={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            {!!user.userData.isInNetwork && (
              <Box
                sx={{
                  background: "#4FB14F",
                  width: 13,
                  height: 13,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  borderRadius: "50%",
                  border: "2px solid #F1F7FA",
                }}
              />
            )}
          </Box>
          <span style={{ fontSize: 14 }}>{user.userData.name}</span>
        </Link>
      ))}
      <List sx={{ display: "inline" }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/messages")}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Сообщения" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default UserItems;
