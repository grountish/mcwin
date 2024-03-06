// These styles apply to every route in the application
import "@/styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d2poexpdc5y9vj.cloudfront.net/embed/js/ez_widgets_v2.js";
    script.type = "text/javascript";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Head>
        <title>McWin Capital Partners | Annual Investor Meeting 2024</title>
        <meta
          name="description"
          content="Empowering food evolution - Join us to accelerate the transformation of the world's food ecosystem- We invite you to be part of our event where we invest in companies whose breakthroughs will drive this revolution. Don't miss this opportunity to change the world with us!"
        />
        <meta
          property="og:title"
          content="McWin Capital Partners | Annual Investor Meeting 2024"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aimmcwin.com" />
        <meta property="og:image" content="" />
        <link
          rel="icon"
          href="https://cdn.sanity.io/images/9nxeopkt/production/adaf4e76e7f1eaf8dbee9dc45f318244677bf2d7-98x97.jpg"
          sizes="any"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
