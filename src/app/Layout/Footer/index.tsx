import Link from "next/link";
import { footerLinks } from "../../../utils/footerLinks";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "../../Theme/themes";
import styles from "./footer.module.scss";
import SocialAccounts from "@/app/Components/SocialAccounts";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  header: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`}>
      <div className={styles.container}>
        <SocialAccounts />
        <div className={`${styles.links} flex flex-wrap py-8 ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`}>
          {footerLinks.map((section: FooterSection, index: any) => (
            <div key={index} className={`${styles.column}`}>
              <h3 className={`${styles.header}`}>{section.header}</h3>
              <ul className="flex flex-col">
                {section.links.map((link: FooterLink, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      <span className={`${styles.link}`}>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};



const FooterBottom: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${styles.footer_bottom} ${theme === 'dark' ? styles['dark-theme'] : styles['light-theme']}`}>
      <div className={styles.container}>
        <div className="flex justify-between w-100">
          <div className={styles.logo}>
            <a className={styles.logoWrap} title="Go to home page" href="/">
              <div className={styles.logoContent}>
                <span className={`${styles.logoText}`}>Similar</span>
                <span className={styles.logoIcon}>
                  <span className={styles.iconText}>Watch</span>
                </span>
              </div>
            </a>
          </div>
          <div>
            <ul className="flex flex-wrap items-center gap-8 gap-y-2">
              <li>
                <Link href="#">
                  <span className={`${styles.link}`}>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className={`${styles.link}`}>Terms and conditions</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className={`${styles.link}`}>Cookies Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className={`${styles.link}`}>About us</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className={`${styles.link}`}>EULA</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className={`${styles.link}`}>Contact</span>
                </Link>
              </li>
              <div className={`${styles.themeButton}`} onClick={toggleTheme}>
                <i className={styles.icon}>
                  {theme === "light" ? (
                    <BiSun style={{ fontSize: "20px" }} />
                  ) : (
                    <BiMoon style={{ fontSize: "20px" }} />
                  )}

                </i>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
