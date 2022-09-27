import Image from "next/image";
import AgendaDetails from "./AgendaDetails";
import AgendaQuotes from "./AgendaQuotes";
import Countdown from "./Countdown";

const Agenda = () => {
  return (
    <section id="agenda" className="py-20">
      {/* quote */}
      <AgendaQuotes />

      {/* actual agenda */}
      <div className="bg-dark-green text-white font-dm-serif py-12 rounded-t-3xl">
        <div className="custom-container">
          {/* menuju pernikahan */}
          <Countdown />
          <div className="dash" />
          <AgendaDetails />
        </div>
      </div>
    </section>
  );
};

export default Agenda;
