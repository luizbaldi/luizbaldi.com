import styles from "./SkillsSection.module.css";
import Section from "@components/Section";
import SkillBox from "./components/SkillBox";

type Skill = {
  label: string;
  level: number;
};

const languages: Skill[] = [
  { label: "JavaScript", level: 5 },
  { label: "Elixir", level: 3 },
];

const libs: Skill[] = [
  { label: "React", level: 5 },
  { label: "React Native", level: 5 },
  { label: "Redux", level: 5 },
  { label: "TypeScript", level: 4 },
  { label: "Styled Components", level: 4 },
  { label: "React Query", level: 3 },
  { label: "Svelte", level: 3 },
  { label: "Node.js", level: 3 },
  { label: "Phoenix (Elixir)", level: 3 },
  { label: "React Testing Lib", level: 3 },
  { label: "Cypress", level: 3 },
  { label: "Framer Motion", level: 3 },
];

const SkillsSection = () => {
  const renderSkill = (skill) => (
    <SkillBox key={skill.label} label={skill.label} level={skill.level} />
  );
  return (
    <Section title="Skills">
      <h3 className={styles.title}>Programming languages</h3>
      <div className={styles.skillBoxContainer}>
        {languages.map(renderSkill)}
      </div>

      <h3 className={styles.title}>Frameworks and libraries</h3>
      <div className={styles.skillBoxContainer}>{libs.map(renderSkill)}</div>
    </Section>
  );
};

export default SkillsSection;
