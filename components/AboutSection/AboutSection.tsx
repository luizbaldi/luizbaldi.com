import Section from "@components/Section";

const AboutSection = () => {
  return (
    <Section title="About">
      Hi, I'm Luiz 👋
      <p>
        I've been working with frontend development for more than seven years.
        Most of my time was focused on building web applications, but I also
        worked on mobile apps (React Native) and backend services (Elixir and
        Node.js). Lately, my focus has been on frontend architecture and
        developer experience, which brings me great joy and fun.
      </p>
      <p>
        I'm currently working as a Senior Frontend Engineer at{" "}
        <a href="https://www.appcues.com" target="_blank">
          Appcues
        </a>
        . For more professional info, check my{" "}
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
