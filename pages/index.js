import Head from "next/head";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Annisa & Gema Wedding Invitation</title>
        <meta name="description" content="Annisa and Gema Wedding Invitation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="custom-container">
        <Hero />
      </main>
    </>
  );
}
