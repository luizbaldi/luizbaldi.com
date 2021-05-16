import { motion } from "framer-motion";
import styles from "../SkillsSection.module.css";

type Props = {
  label: string;
  level: number;
};

const levels = Array.from(Array(5), (_, i) => i + 1);

const SkillBox = ({ label, level }: Props) => {
  return (
    <div className={styles.skillBox}>
      {label}
      <div className={styles.levelContainer}>
        {levels.map((value) => {
          const isActive = level >= value;

          console.log({ value: value / 10 });

          return (
            <motion.span
              key={value}
              initial={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              animate={{
                backgroundColor: isActive
                  ? "var(--neon-green)"
                  : "rgba(255, 255, 255, 0.5)",
              }}
              transition={{
                type: "spring",
                delay: value / 10 + 0.2,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillBox;
