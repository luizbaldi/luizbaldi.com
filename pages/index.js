import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
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

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </>
  );
}
