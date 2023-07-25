import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import React, { FC, SyntheticEvent, useState } from "react";
import { IUserData } from "./types";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Auth: FC = () => {
  const [isRegForm, setIsRegForm] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = getAuth();

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
      } catch (error: any) {
        error.message && setError(error.message);
      }
    } else {
      console.log("auth");
    }
    console.log(userData.email, userData.password);
    setUserData({
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
      <Grid display="flex" justifyContent="center" textAlign="center">
        <form onSubmit={handleLogin}>
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
