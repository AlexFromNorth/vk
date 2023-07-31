import React, { FC, MouseEvent, SyntheticEvent, useState } from "react";
import { useAuth } from "../../providers/useAuth";
import { Alert } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { timeCreated } from "../../../types";
import { IUserData } from "../auth/types";
import { getAuth } from "firebase/auth";

const AddFriend: FC = () => {
  const [users, setUsers] = useState<string>("");
  // const { user, db, ga } = useAuth();
//   const db = getFirestore();
const {db} = useAuth()


  // console.log(db)
  const [error, setError] = useState("");

  const [userData, setUserData] = useState<IUserData>({
    name: '',
    email: "",
    password: "",
  } as IUserData);

  const addPostHandler = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "users"), {
        userData,
        createdAt: timeCreated(new Date()),
      });
      alert("test");
    } catch (e: any) {
      setError(e);
    }
    setUserData({
      name: '',
      email: "",
      password: "",
    });
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <div>
        <form onSubmit={addPostHandler}>
          <input
            type="text"
            placeholder="name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />
          <button type="submit">Added</button>
        </form>
      </div>
    </>
  );
};

export default AddFriend;
