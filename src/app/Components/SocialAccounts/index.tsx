import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import styles from "./SocialAccounts.module.scss";
import { useTheme } from '../../Theme/themes';
import Link from "next/link";

const SocialAccounts: React.FC = () => {
  const { theme } = useTheme();
  return (

    <div className={`${styles.socialContainer} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']} flex align-center items-center gap-8 py-10`}>
      <span className={styles.header}>Follow us</span>
      <ul className="flex items-center gap-8">
        <li>
          <Link
            href="https://www.youtube.com/"
            className={`${styles.iconLink}`}
          >
            <FaYoutube size={24} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.twitter.com/"
            className={`${styles.iconLink}`}
          >
            <FaTwitter size={24} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/"
            className={`${styles.iconLink}`}
          >
            <FaFacebook size={24} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialAccounts;
