// Import React and other necessary dependencies
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { MenuItemsUtil, MenuItem } from "../../../utils/menuItems";
import { useTheme } from "../../Theme/themes"; 

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const menuItems: MenuItem[] = MenuItemsUtil.generateMenuItems();
  const submenuTopOffset = 15.5;
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveSubmenu(id);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`}>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`${styles.menuItem} ${
              item.sub_menu ? styles.submenu : ""
            }`}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={item.link}>
              <span className={`${styles.link} ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
                {item.text}
              </span>
            </Link>
            {item.sub_menu && activeSubmenu === item.id && (
              <ul
                className={styles.submenuContent}
                style={{ top: `${submenuTopOffset}rem` }}
              >
                {item.sub_menu.map((submenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={submenuItem.link}>
                      <span className={`${styles.link} ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
                        {submenuItem.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
