import React, { FC, useState } from "react";
import logoImg from "./vk_logo.png";
import { Search } from "@mui/icons-material";
import styles from "./Header.module.css";

const Header: FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <img src={logoImg} alt="VK" />
      </div>
      <div className={styles.wrapper}>
        {!isSearchActive && <Search />}
        <input type="text" placeholder="Search" onClick={()=>setIsSearchActive(true)}/>
      </div>
    </header>
  );
};

export default Header;
