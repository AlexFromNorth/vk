import { Box, TextField } from "@mui/material";
import React, { FC } from "react";

const AddPost: FC = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
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
      />
    </Box>
  );
};

export default AddPost;
