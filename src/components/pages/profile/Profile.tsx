import React, { FC, useEffect, useState } from "react";
import { useAuth } from "../../providers/useAuth";
import { Avatar, Box, Card, ListItemText } from "@mui/material";
import { collection, onSnapshot, query } from "firebase/firestore";
import { IFriends } from "../../../types";
import { useParams } from "react-router-dom";
import Firebase_db from "../../routes/Firebase_db";

const Profile: FC = () => {
  const { user } = useAuth();
  const { db } = useAuth();
  const { id } = useParams();

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

  // console.log(user?.id);
  // console.log(characters[0].userData.uid)

  return (
    <Box
      sx={{
        border: "1px solid #e2e2e2",
        borderRadius: "10px",
        padding: 2,
        marginTop: 4,
      }}
    >
      {/* <Avatar src={user?.avatar}></Avatar>
      <h2>{user?.name}</h2> */}

      <div>
        {Firebase_db("users").map((friend: any) => {
          if (!!id === true && id === friend.userData.uid) {
            return (

                <Box key={friend.userData.uid} sx={{  p: 2, cursor: "default" }}>
                  <Box sx={{ display: "flex" }}>
                    <Avatar src={friend.userData.avatar}></Avatar>
                    <ListItemText
                      primary={friend.userData.name}
                      sx={{ marginLeft: "15px", marginTop: "4px" }}
                    />
                  </Box>
                  <ListItemText primary={`Email: ${friend.userData.email}`} />
                </Box>

            );
          } else if (!!id === false && user?.id === friend.userData.uid) {
            return (
              <Box key={friend.userData.uid} sx={{  p: 2, cursor: "default" }}>
                  <Box sx={{ display: "flex" }}>
                    <Avatar src={friend.userData.avatar}></Avatar>
                    <ListItemText
                      primary={friend.userData.name}
                      sx={{ marginLeft: "15px", marginTop: "4px" }}
                    />
                  </Box>
                  <ListItemText primary={`Email: ${friend.userData.email}`} />
                </Box>
            );
          }
        })}
      </div>
    </Box>
  );
};

export default Profile;
