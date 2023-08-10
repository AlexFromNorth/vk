import React, { FC, useState } from "react";
import logoImg from "./vk_logo.png";
import { Search } from "@mui/icons-material";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const Header: FC = () => {
  // const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <Avatar src={logoImg} alt="VK"  onClick={() => navigate("/")}  sx={{cursor: 'pointer'}}/>
      </div>
      <div className={styles.wrapper}>
        {/* {!isSearchActive && <Search />} */}
        <input
          type="text"
          placeholder="Search"
          // onClick={() => setIsSearchActive(true)}
        />
      </div>
    </header>
  );
};

export default Header;
