import styles from "./TalksSection.module.css";
import Section from "@components/Section";

const talks = [
  {
    title: "From REST to GraphQL",
    when: "The Dev Tek - Dec/2019",
    link: "https://slides.com/luizbaldi/from-rest-to-graphql",
  },
  {
    title: "React Internals - React Fiber and custom renderers",
    when: "Beagá JS - Jul/2019",
    link: "http://luizbaldi.com/talks/react-internals",
  },
  {
    title: "Understanding React Hooks and it's Impact on the ecosystem",
    when: "The Developer's Conference - Jun/2019",
    link: "http://luizbaldi.com/talks/react-hooks-and-ecosystem",
  },
  {
    title: "Understanding React Hooks and it's Impact on the ecosystem",
    when: "Beagá JS - Apr/2019",
    link: "http://luizbaldi.com/talks/react-hooks-and-ecosystem",
  },
  {
    title: "React Internals - React Fiber and custom renderers",
    when: "Aniversário React JS | Meetup SmarttBot - May/2019",
    link: "http://luizbaldi.com/talks/react-internals",
  },
  {
    title: "Understanding React Hooks and it's Impact on the ecosystem",
    when: "Meetup Week CI&T - Mar/2019",
    link: "http://luizbaldi.com/talks/react-hooks-and-ecosystem",
  },
  {
    title: "React - From DOM to Native",
    when: "MeetUp App Makers - Sep/2018",
    link: "http://luizbaldi.com/talks/from-dom-to-native",
  },
  {
    title: "State management in React",
    when: "Framework System - Jul/2018",
    link: null,
  },
  {
    title: "A React Native land tour",
    when: "Meetup Front end BH - Jun/2018",
    link: null,
  },
];

const TalksSection = () => {
  return (
    <Section title="Talks">
      {talks.map(({ title, when, link }) => (
        <div className={styles.talkItem} key={when}>
          <a href={link}>{title}</a>
          <i>@ {when}</i>
        </div>
      ))}
    </Section>
  );
};

export default TalksSection;
