import React from "react";
import Image from "next/image";
import SettingsIcon from "../../../assets/images/settings-icon.png";
import styles from "./header.module.scss";
import { FiSearch } from "react-icons/fi";
import Button from "../../GenericComponents/Button";
import { useTheme } from "../../Theme/themes"; 

const Header = () => {
  const { theme } = useTheme();
  return (
    <section className={`${styles.header} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`}>
      <div className="">
        <div className="flex justify-between w-100">
          <div className={styles.header_logo}>
            <Image
              src={SettingsIcon}
              alt={"Settings-Icon"}
              className={styles.header_img}
            />
            <p className={styles.header_title}>ZinTools</p>
          </div>
          <div className={styles.search_bar}>
            <input
              type="text"
              placeholder="Search for Movies, TV Shows, Themes & Cast"
              className={`${styles.input_field} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`}
            />
            <FiSearch className={styles.search_icon} />
            <div className={styles["border-left"]}></div>
          </div>
          <div className={styles.header_buttons}>
            <Button className={styles.button_light}>Log In</Button>
            <Button className={styles.button_primary}>Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
