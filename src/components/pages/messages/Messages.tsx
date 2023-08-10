import React, {
  FC,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { useAuth } from "../../providers/useAuth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { IMessage, IPost, timeCreated } from "../../../types";
import { initialPosts } from "../home/initialPosts";
import {
  Alert,
  Avatar,
  Box,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
  makeStyles,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import classes from "./style.module.css";
import { getAuth } from "firebase/auth";



const Messages: FC = () => {
  const { user, db } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  // const ga = getAuth();
  // console.log(ga)
  // console.log(db)



  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (doc) => {
      const array:IMessage[]=[]
      doc.forEach((d: any) => {
        array.push(d.data())
      });
      setMessages(array)
    });
    return () => {
      unsub();
    };
  }, []);

  const addMessageHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await addDoc(collection(db, "messages"), {
        user,
        message,
        createdAt: timeCreated(new Date()),
      });
    } catch (e: any) {
      setError(e);
    }
    setMessage("");
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <div>Messages</div>
      <Box
        sx={{
          border: "1px solid #e2e2e2",
          borderRadius: "10px",
          padding: 2,
          marginTop: 4,
        }}
      >
        <List style={{ height: "65vh", overflowY: "auto" }}>
          {messages.map((msg, idx) => (
            <ListItem key={idx} sx={{marginTop: 2}}>
              <Grid
                container
                sx={msg.user.id === user?.id ? { textAlign: "right" } : {}}
              >
                <Grid item xs={12}>
                  <Avatar
                    sx={{ width: "30", height: "30", display: "inline-block", marginBottom: '-15px', marginRight: '15px' }}
                    src={msg.user.avatar}
                  />
                  <List sx={{display: 'inline-block', marginBottom: '5px'}}>{msg.user.name}</List>
                </Grid>
                <Grid item xs={12}>
                  
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    primary={msg.message}
                    sx={msg.user.id === user?.id ? { color: "#1976d2" } : {}}
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    secondary={msg.createdAt}
                    sx={msg.user.id === user?.id ? { color: "#1976d2" } : {}}
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Type Something"
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Grid>
          <Grid item xs={1} textAlign="right">
            <Fab color="primary" onClick={addMessageHandler}>
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Messages;
