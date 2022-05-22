import { useEffect, useMemo, useState } from "react";
import { Page } from "types";
import Head from "next/head";
import { useRouter } from "next/router";

import Menu from "@components/Menu";
import Box from "@components/Box";
import GoBack from "@components/GoBack";
import TalksSection from "@components/TalksSection";
import AboutSection from "@components/AboutSection";
import SkillsSection from "@components/SkillsSection";

function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<Page>("menu");

  useEffect(() => {
    const { page } = router.query as { page: Page | undefined };

    if (page) {
      setCurrentPage(page);
    }
  }, [router.query]);

  const onPageChange = (page: Page) => {
    router.push({
      pathname: router.pathname,
      query: { page },
    });
    setCurrentPage(page);
  };

  const pages = useMemo(
    () => ({
      menu: <Menu onPageChange={onPageChange} />,
      about: <AboutSection />,
      talks: <TalksSection />,
      skills: <SkillsSection />,
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Luiz Baldi</title>
        <link rel="icon" href="/ico.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container">
        <Box>
          <GoBack
            isVisible={currentPage !== "menu"}
            resetNavigation={() => onPageChange("menu")}
          />
          {pages[currentPage]}
        </Box>
      </main>
    </>
  );
}

export default Home;
