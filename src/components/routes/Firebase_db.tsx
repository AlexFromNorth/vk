import React, { useEffect, useState } from "react";
import { useAuth } from "../providers/useAuth";
import { IFriends } from "../../types";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const Firebase_db = (el: string, filter?: any) => {
  const { db } = useAuth();
  const [characters, setCharacters] = useState<IFriends[]>([]);


  useEffect(() => {
    if (filter==='currentUser') {
      const q = query(
        collection(db, el),
        where("userData.uid", "==", "yNSGxnC28eY32BeLoimAVZ4CNf42")
      );

      const unsub = onSnapshot(q, (doc) => {
        doc.forEach((e) => {});
        const array: any[] = [];
        doc.forEach((d) => {
          array.push(d.data());
        });
        setCharacters(array);
      });
      return () => {
        unsub();
      };
    } else {
      const q = query(collection(db, el));

      const unsub = onSnapshot(q, (doc) => {
        doc.forEach((e) => {});
        const array: any[] = [];
        doc.forEach((d) => {
          array.push(d.data());
        });
        setCharacters(array);
      });
      return () => {
        unsub();
      };
    }
  }, []);

  return characters;
};

export default Firebase_db;
