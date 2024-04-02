import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ title, children, className }: Props) => {
  return (
    <motion.div
      className={`${styles.container} ${className}`}
      initial={{ opacity: 0, y: "5vw" }}
      animate={{ opacity: 0.8, y: 0 }}
    >
      {title && (
        <>
          <h2 className={styles.title}>{title}</h2>
          <motion.div
            className={styles.divider}
            transition={{ type: "tween", duration: 0.8 }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "30%", opacity: 1 }}
          />
        </>
      )}
      <div className={styles.content}>{children}</div>
    </motion.div>
  );
};

export default Section;
