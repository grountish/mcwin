// These styles apply to every route in the application
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MCWIN</title>
        <meta name="description" content="description of the site." />
        <meta property="og:title" content="MCWIN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mcwin.com" />
        <meta
          property="og:image"
          // content="https://cdn.sanity.io/images/04t3y8i0/production/7f87f48b12c41c7a17248476c20370b6fd7ac09b-2092x1152.png?h=400&fit=max"
        />
        <link
          rel="icon"
          // href="https://cdn.sanity.io/images/04t3y8i0/production/f8286efc144febf107b2c69e1a335fed86134946-100x100.png"
          sizes="any"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
