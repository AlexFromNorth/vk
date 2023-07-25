import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layout/Layout";
import RoutesItem from "./components/routes/RoutesItem";
import firebase from "firebase/compat/app";
import { AuthProvider } from "./components/providers/AuthProvider";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAphBHSmUNvA8VUz9ZK2GHc24ZiFffIyBk",
  authDomain: "vk-petproject.firebaseapp.com",
  projectId: "vk-petproject",
  storageBucket: "vk-petproject.appspot.com",
  messagingSenderId: "451444827001",
  appId: "1:451444827001:web:42bcf08d926b4536a4c5a8",
  measurementId: "G-RP9NT9NJZN",
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RoutesItem />
    </AuthProvider>
  </React.StrictMode>
);
