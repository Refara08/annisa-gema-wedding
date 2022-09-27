import Head from "next/head";
import Agenda from "../components/agendas/Agendas";
import Gift from "../components/gift/Gift";
import Hero from "../components/hero/Hero";
import Identity from "../components/identity/Identity";
import Ucapan from "../components/congratulate/Ucapan";

export default function Home() {
  return (
    <>
      <Head>
        <title>Annisa & Gema Wedding Invitation</title>
        <meta name="description" content="Annisa and Gema Wedding Invitation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="custom-container">
          <Hero />
          <Identity />
        </div>
        <Agenda />
        <Gift />
        <Ucapan />
      </main>
    </>
  );
}
