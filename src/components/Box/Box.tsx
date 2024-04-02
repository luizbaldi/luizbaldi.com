import { useEffect, ReactNode } from "react";
import styles from "./Box.module.css";
import { motion } from "framer-motion";
import { tsParticles } from "tsparticles";
import particlesJson from "./particles.json";

type Props = {
  children: ReactNode;
};

const Box = ({ children }: Props) => {
  useEffect(() => {
    // Temporary - This particles library will be removed in the next update
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tsParticles.load("particles", particlesJson);
  }, []);

  return (
    <motion.div
      className={styles.box}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.particlesContainer}>
        <motion.div
          className={styles.particles}
          id="particles"
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
      <div className={styles.contentContainer}>
        <motion.div
          className={styles.content}
          transition={{ delay: 0.8, duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Box;
