import Section from "@components/Section";

const AboutSection = () => {
  return (
    <Section title="About">
      Hi 👋
      <p>
        I'm a Software engineer focused on JavaScript and Elixir and specialized
        in React and React Native, where I'm usually building custom solutions
        for web and mobile platforms, most of the time doing frontend
        development.
      </p>
      <p>
        Also a board member of a brazilian podcast called{" "}
        <a href="https://devdevs.org" target="_blank">
          DevDevs
        </a>
        , and I've been trying to learn more about creative programming.
      </p>
      <p>
        For more professional info, check my{" "}
        <a
          href="https://www.notion.so/Resume-9c32a79994f64e188d7a5cb332bca42f"
          target="_blank"
        >
          resume
        </a>
        .
      </p>
    </Section>
  );
};

export default AboutSection;
