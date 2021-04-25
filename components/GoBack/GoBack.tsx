import { AnimatePresence, motion } from "framer-motion";
import styles from "./GoBack.module.css";

type Props = {
  isVisible: boolean;
  resetNavigation: () => void;
};

const GoBack = ({ isVisible, resetNavigation }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.container}
        onClick={resetNavigation}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? 0.6 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        exit={{ opacity: 0 }}
      >
        <img src="/assets/chevron-left.svg" alt="Arrow left" />
        <span>Back</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default GoBack;
