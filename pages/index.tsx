import { useState } from "react";
import { Pages } from "types";
import Head from "next/head";

import Menu from "@components/Menu";
import Box from "@components/Box";
import GoBack from "@components/GoBack";
import TalksSection from "@components/TalksSection";
import AboutSection from "@components/AboutSection";

function Home() {
  const [currentPage, setCurrentPage] = useState<Pages>("menu");

  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return <AboutSection />;
      case "talks":
        return <TalksSection />;
      default:
        return <Menu setCurrentPage={setCurrentPage} />;
    }
  };

  const resetNavigation = () => {
    setCurrentPage("menu");
  };

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
            resetNavigation={resetNavigation}
          />
          {renderContent()}
        </Box>
      </main>
    </>
  );
}

export default Home;
