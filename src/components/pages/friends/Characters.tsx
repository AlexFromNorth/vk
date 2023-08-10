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
import { Link } from "react-router-dom";

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

  // console.log(Firebase_db("users", 'currentUser'))

  return (
    <div>
      {Firebase_db("users").map((friend, i) => (
        <Card key={friend.userData.uid} sx={{ mb: 4, p: 2, cursor: "default" }}>
          <Link
            to={`/profile/${friend.userData.uid}`}
            style={{color: 'black'}}
          >
            <Box sx={{ display: "flex" }}>
              <Avatar src={friend.userData.avatar}></Avatar>
              <ListItemText
                primary={friend.userData.name}
                sx={{ marginLeft: "15px", marginTop: "4px" }}
              />
            </Box>
            <ListItemText primary={`Email: ${friend.userData.email}`} />
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Characters;
