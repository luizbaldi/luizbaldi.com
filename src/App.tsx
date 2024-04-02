import { useCallback, useEffect, useMemo, useState } from "react";
import { Page } from "@/types";

import Menu from "@/components/Menu";
import Box from "@/components/Box";
import GoBack from "@/components/GoBack";
import TalksSection from "@/components/TalksSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";

function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("menu");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page") as Page | null;

    if (page) {
      setCurrentPage(page);
    }
  }, []);

  const onPageChange = useCallback((page: Page) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", page);
    setCurrentPage(page);
  }, []);

  const pages = useMemo(
    () => ({
      menu: <Menu onPageChange={onPageChange} />,
      about: <AboutSection />,
      talks: <TalksSection />,
      skills: <SkillsSection />,
    }),
    [onPageChange]
  );

  return (
    <>
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
