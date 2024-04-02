import { AnimatePresence, motion } from "framer-motion";
import styles from "./GoBack.module.css";
import chevronLeftIcon from "@/assets/chevron-left.svg";

type Props = {
  isVisible: boolean;
  resetNavigation: () => void;
};

const GoBack = ({ isVisible, resetNavigation }: Props) => {
  return (
    <AnimatePresence>
      <motion.button
        className={styles.container}
        onClick={resetNavigation}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? 0.6 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        whileFocus={{ opacity: isVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        role="button"
      >
        <img src={chevronLeftIcon} alt="Arrow left" />
        <span>Back</span>
      </motion.button>
    </AnimatePresence>
  );
};

export default GoBack;
