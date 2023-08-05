import React, { FC, useEffect, useState } from "react";
import { useAuth } from "../../providers/useAuth";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { IFriends, IUser } from "../../../types";
import Firebase_db from "../../routes/Firebase_db";
import { Avatar, Box, Card, ListItemText } from "@mui/material";

const Characters: FC = () => {
  // const { db } = useAuth();
  // const [characters, setCharacters] = useState<IFriends[]>([]);

  // useEffect(() => {
  //   const q = query(collection(db, "users"));

  //   const unsub = onSnapshot(q, (doc) => {
  //     doc.forEach((e) => {
  //       // console.log(e.data());
  //     });
  //     const array: any[] = [];
  //     doc.forEach((d) => {
  //       array.push(d.data());
  //     });
  //     setCharacters(array);
  //   });
  //   return () => {
  //     unsub();
  //   };
  // }, []);

  // Firebase_db("users", 'currentUser').forEach(el=>console.log(el))

  return (
    <div>
      {Firebase_db("users").map((friend, i) => (
        // {Firebase_db("users", ).map((friend, i) => (
        <>
          <Card sx={{ mb: 4, p: 2, cursor: "default" }}>
            <Box sx={{ display: "flex" }}>
              <Avatar src={friend.userData.avatar}></Avatar>
              <ListItemText
                primary={friend.userData.name}
                sx={{ marginLeft: "15px", marginTop: "4px" }}
              />
            </Box>
            <ListItemText primary={`Email: ${friend.userData.email}`} />
          </Card>
        </>
      ))}
    </div>
  );
};

export default Characters;
