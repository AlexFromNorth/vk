import { Box, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import {   IAddPost } from "../../../types";
import { users } from "../../layout/sidebar/DataUsers";



const AddPost: FC<IAddPost> = ({setPosts}) => {
    const [content, setContent] = useState<string>('')

    const addPostHandler = ()=>{
        setPosts(prev=> [...prev,{
            author: users[0],
            content,
            // createdAt: new Date()
            createdAt: '5 m later',
        }])
    }

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
          sx: { borderRadius: "25px", backgroundColor: 'F9F9F9' },
        }}
        sx={{ width: "100%" }}
        onKeyPress={addPostHandler}
        onChange={e=> setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
