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

const users = [
  {
    id: 0,
    avatar:
      "https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg",
    name: "Alexander Biryukov",
    isInNetwork: true,
  },
  {
    id: 1,
    avatar:
      "https://3.bp.blogspot.com/-HboAxZ4l4t0/W_Xjd5gaDBI/AAAAAAAA39U/kcdJ_QkdNXkS9PYBuUWKEVq0725P93_awCLcBGAs/s1600/0.jpg",
    name: "Kate Smirnova",
    isInNetwork: true,
  },
  {
    id: 2,
    avatar:
      "https://i.pinimg.com/originals/a7/9c/f3/a79cf3ef0d9a67d718c06cf51b9b3d5b.jpg",
    name: "Victoria Ivanova",
    isInNetwork: false,
  },
  {
    id: 3,
    avatar:
      "https://wp-s.ru/wallpapers/4/13/468516617975209/ulybayushhijsya-paren-v-ch-rnoj-futbolke.jpg",
    name: "Dmitriy Nelipa",
    isInNetwork: false,
  },
];

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
      {users.map((user) => (
        <Link key={user.id}
          to={`/profile/${user.id}`}
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
              src={user.avatar}
              sx={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            {!!user.isInNetwork && (
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
          <span style={{ fontSize: 14 }}>{user.name}</span>
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