import Head from "next/head";
import Agenda from "../components/agendas/Agendas";
import Gift from "../components/gift/Gift";
import Hero from "../components/hero/Hero";
import Identity from "../components/identity/Identity";
import Ucapan from "../components/congratulate/Ucapan";
import axiosBase from "../utils/axiosBase";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import FirstLoad from "../components/first-load/FirstLoad";

const sortByLatest = (arr) => {
  const compare = (a, b) => {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();

    if (timeA < timeB) {
      return 1;
    }
    if (timeA > timeB) {
      return -1;
    }
    return 0;
  };

  const sortedArr = arr.sort(compare);

  return sortedArr;
};

export default function Home({ listUcapan, guestName }) {
  const [list, setList] = useState(sortByLatest(listUcapan));
  const [loadingList, setLoadingList] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const updateList = async () => {
    setLoadingList(true);
    const response = await axiosBase.get("/api/ucapan");
    setList(sortByLatest(response.data));
    setLoadingList(false);
  };

  const updateFirstLoadHandler = (bool) => {
    setFirstLoad(bool);
  };

  return (
    <>
      <Head>
        <title>Annisa & Gema Wedding Invitation</title>
        <meta name="description" content="Annisa and Gema Wedding Invitation" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* tambah disini conditional main yang isinya halaman pembuka untuk play music yang hanya muncul ketika pertama kali loading saja */}
      {firstLoad && (
        <main>
          <FirstLoad update={updateFirstLoadHandler} />
        </main>
      )}

      {!firstLoad && (
        <main className="scroll-smooth">
          <Hero guestName={guestName} firstLoad={firstLoad} />
          <Identity />
          <Agenda />
          <Gift />
          <Ucapan
            listUcapan={list}
            updateList={updateList}
            loadingList={loadingList}
          />
          <Footer />
        </main>
      )}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const response = await axiosBase.get("/api/ucapan");

  return {
    props: {
      listUcapan: response.data,
    },
  };
};
