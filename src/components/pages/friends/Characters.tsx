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

const Characters: FC = () => {
  const { db } = useAuth();
  const [characters, setCharacters] = useState<IFriends[]>([]);

  useEffect(() => {
    const q = query(collection(db, "users"));

    const unsub = onSnapshot(q, (doc) => {
      doc.forEach((e) => {
        // console.log(e.data());
      });
      const array: any[] = [];
      doc.forEach((d) => {
        array.push(d.data());
      });
      setCharacters(array);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      {characters.map((friend, i) => (
        <>
          <div>{friend.userData.name}</div>
          <div>{friend.userData.email}</div>
          <div>{friend.userData.password}</div>
        </>
      ))}
    </div>
  );
};

export default Characters;
