import { useState } from "react";

import Head from "next/head";
import Agenda from "../components/agendas/Agendas";
import Gift from "../components/gift/Gift";
import Hero from "../components/hero/Hero";
import Identity from "../components/identity/Identity";
import Ucapan from "../components/congratulate/Ucapan";
import axiosBase from "../utils/axiosBase";
import Footer from "../components/footer/Footer";

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

  const updateList = async () => {
    setLoadingList(true);
    const response = await axiosBase.get("/api/ucapan");
    setList(sortByLatest(response.data));
    setLoadingList(false);
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

      <main>
        <Hero guestName={guestName} />
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
