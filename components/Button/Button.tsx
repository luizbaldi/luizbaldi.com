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
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
