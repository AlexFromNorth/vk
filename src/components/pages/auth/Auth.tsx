import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import { IUserData } from "./types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAuth } from "../../providers/useAuth";
import { useNavigate } from "react-router-dom";
import { timeCreated } from "../../../types";
import { addDoc, collection } from "firebase/firestore";

const Auth: FC = () => {
  const { ga, user, db } = useAuth();

  const [isRegForm, setIsRegForm] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<IUserData>({
    isInNetwork: true,
    avatar: '',
    test: "",
    uid: "",
    name: "",
    email: "",
    password: "",
  } as IUserData);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegForm) {
      try {
        const res = await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
        await updateProfile(res.user, {
          displayName: userData.name,
        });

        userData.uid = ga.currentUser?.uid
        await addDoc(collection(db, "users"), {
          userData,
          createdAt: timeCreated(new Date()),
        });
      } catch (error: any) {
        error.message && setError(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password);
      } catch (error: any) {
        error.message && setError(error.message);
      }
    }
    setUserData({
      isInNetwork:true,
      avatar: '',
      test: "",
      uid: "",
      email: "",
      password: "",
      name: "",
    });
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Grid display="flex" justifyContent="center" textAlign="center">
        <form onSubmit={handleLogin}>
          <TextField
            label="Name"
            variant="outlined"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            sx={{ display: "block", marginBottom: 3 }}
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            sx={{ display: "block", marginBottom: 3 }}
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            sx={{ display: "block", marginBottom: 3 }}
            required
          />
          <TextField
            type="text"
            label="Your url avatar"
            variant="outlined"
            value={userData.avatar}
            onChange={(e) =>
              setUserData({ ...userData, avatar: e.target.value })
            }
            sx={{ display: "block", marginBottom: 3 }}
          />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button type="submit" onClick={() => setIsRegForm(false)}>
              Auth
            </Button>
            <Button type="submit" onClick={() => setIsRegForm(true)}>
              Register
            </Button>
          </ButtonGroup>
        </form>
      </Grid>
    </>
  );
};

export default Auth;
