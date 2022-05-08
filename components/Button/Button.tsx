import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick = () => null }: Props) => {
  return (
    <motion.button
      className={styles.button}
      onClick={onClick}
      variants={{
        active: { scale: 1.05 },
      }}
      whileHover="active"
      whileTap={{ scale: 1 }}
      whileFocus="active"
      role="button"
    >
      {children}
    </motion.button>
  );
};

export default Button;
