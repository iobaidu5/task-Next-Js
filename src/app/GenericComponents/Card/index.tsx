import Link from 'next/link';
import { useTheme } from '../../Theme/themes';
import styles from './Card.module.scss';

interface CardProps {
  iconSrc: string;
  title: string;
  paragraph: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ iconSrc, title, paragraph, link }) => {
  const { theme } = useTheme();
  return (
    <Link href={link} passHref>
       <div className={`${styles.card} ${theme === 'dark' ? styles['dark-theme'] : ''}`}>
        <img src={iconSrc} alt="Card Icon" className={styles.icon} />
        <div className={styles.title}>{title}</div>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
    </Link>
  );
};

export default Card;
