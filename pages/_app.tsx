import "@styles/globals.css";
import { AppProps } from "next/app";
import "normalize.css";

function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Application;
