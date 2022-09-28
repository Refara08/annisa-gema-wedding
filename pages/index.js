import Head from "next/head";
import Agenda from "../components/agendas/Agendas";
import Gift from "../components/gift/Gift";
import Hero from "../components/hero/Hero";
import Identity from "../components/identity/Identity";
import Ucapan from "../components/congratulate/Ucapan";
import axiosBase from "../utils/axiosBase";
import { useState } from "react";
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

  // const updateLoadingListHandler = (boolean) => {
  //   setLoadingList(boolean);
  // };

  return (
    <>
      <Head>
        <title>Annisa & Gema Wedding Invitation</title>
        <meta name="description" content="Annisa and Gema Wedding Invitation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
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
