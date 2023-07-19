import { QuestionAnswer } from "@mui/icons-material";
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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserItems: FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        border: "none",
        borderRadius: 3,
        backgroundColor: "#F1F7FA",
      }}
    >
      <Link
        to={"/profile"}
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
            src="https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg"
            sx={{ width: 50, height: 50, borderRadius: "50%" }}
          />
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
        </Box>
        <span style={{ fontSize: 14 }}>Alex Biryukov</span>
      </Link>

      <List sx={{ display: "inline" }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/messages")}>
            <ListItemIcon>
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
