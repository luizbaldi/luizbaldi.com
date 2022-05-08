import Button from "@components/Button";
import { motion } from "framer-motion";
import { Page } from "types";
import styles from "./Menu.module.css";

type Props = {
  setCurrentPage: (page: Page) => void;
};

const Menu = ({ setCurrentPage }: Props) => {
  const onMenuItemClick = (page: Page) => {
    setCurrentPage(page);
  };

  const pages: Page[] = ["about", "talks", "skills"];

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.header}>
        <h2>Luiz Baldi</h2>
        <code className={styles.code}>{"< software engineer />"}</code>
        <span className={styles.bio}>
          calm songs, walks, coffee, beer and code.
        </span>
        <div className={styles.divider} />
      </div>
      <motion.div
        className={styles.options}
        initial={{ opacity: 0, y: "-20%" }}
        animate={{ opacity: 1, y: 0 }}
      >
        {pages.map((screen) => (
          <Button key={screen} onClick={() => onMenuItemClick(screen)}>
            {screen}
          </Button>
        ))}
        <Button
          onClick={() =>
            window.open("https://bit.ly/luizbaldi-resume", "_blank")
          }
        >
          Resume
        </Button>
      </motion.div>
      <div className={styles.footer}>
        <a href="https://github.com/luizbaldi" target="_blank">
          <img src="/assets/github.png" alt="Github icon" />
        </a>
        <a href="https://twitter.com/baldilp" target="_blank">
          <img src="/assets/twitter.png" alt="Twitter icon" />
        </a>
        <a href="https://www.youtube.com/user/lpBaldi" target="_blank">
          <img src="/assets/youtube.png" alt="Youtube icon" />
        </a>
        <a
          href="https://open.spotify.com/user/luizbaldi?si=rGNGJOgnRhqyaR2THj_XjQ"
          target="_blank"
        >
          <img src="/assets/spotify.png" alt="Spotify icon" />
        </a>
        <a href="https://www.linkedin.com/in/luizbaldi" target="_blank">
          <img src="/assets/linkedin.png" alt="Youtube icon" />
        </a>
      </div>
    </motion.div>
  );
};

export default Menu;
