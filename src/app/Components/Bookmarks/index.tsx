import React from "react";
import Card from "../../GenericComponents/Card";
import styles from "./Bookmarks.module.scss";
import { useTheme } from '../../Theme/themes';

interface Data {
    iconSrc: string;
    title: string;
    paragraph: string;
    link: string;
  }
  
  interface BookmarksProps {
    data: Data[];
    header: String;
  }
  

const Bookmarks: React.FC<BookmarksProps> = ({ header, data }) => {
  const { theme } = useTheme();
  return (
     <div className={`${styles.bookmarks} ${theme === 'dark' ? styles['dark-theme'] : ''}`}>
      <h2 className={styles.bookmarks_title}>{header}</h2>
      <div className={styles.bookmarks_cards}>
        {data.map((bookmark, index) => (
          <Card
            key={index}
            iconSrc={bookmark.iconSrc}
            title={bookmark.title}
            paragraph={bookmark.paragraph}
            link={bookmark.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
