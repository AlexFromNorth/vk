import { Alert, Box, TextField } from "@mui/material";
import React, { FC, KeyboardEvent, useState } from "react";
import { IAddPost, timeCreated } from "../../../types";
// import { users } from "../../layout/sidebar/DataUsers";
import { useAuth } from "../../providers/useAuth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const AddPost: FC = () => {
// const AddPost: FC<IAddPost> = () => {
  const [content, setContent] = useState<string>("");
  const { user, db } = useAuth();
  const [error, setError] = useState("");

  const addPostHandler = async  (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && user) {
      try {
        await addDoc(collection(db, "posts"),{
          author: user,
          content,
          createdAt: timeCreated(new Date),
        })


      } catch (e: any) {
        setError(e);
      }


      setContent("");
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
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
    </>
  );
};

export default AddPost;
