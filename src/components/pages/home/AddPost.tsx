import { Box, TextField } from "@mui/material";
import React, { FC, KeyboardEvent, useState } from "react";
import { IAddPost, timeCreated } from "../../../types";
import { users } from "../../layout/sidebar/DataUsers";

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState<string>("");

  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setPosts((prev) => [
        {
          author: users[0],
          content,
          createdAt: timeCreated(new Date()),
        },
        ...prev,
      ]);
      setContent('')
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #e2e2e2",
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <TextField
        label="What's up?"
        variant="outlined"
        margin="normal"
        InputProps={{
          sx: { borderRadius: "25px", backgroundColor: "F9F9F9" },
        }}
        sx={{ width: "100%" }}
        onKeyPress={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
