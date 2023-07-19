import { Box } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";

const UserItems: FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link to={"/profile"} />
      <Box
        sx={{
          position: "relative",
          marginRight: 5,
          borderRadius: "50%",
          overflow: "hidden",
          width: 50,
          height: 50,
        }}
      >
        <img
          src="https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg"
          alt="avatar"
          width={50}
          height={50}
        />
        <Box
          sx={{
            background: "green",
            width: 4,
            height: 4,
            position: "absolute",
            bottom: 2,
            left: 2,
          }}
        />
      </Box>
      <span>Alex Biryukov</span>
    </Box>
  );
};

export default UserItems;
