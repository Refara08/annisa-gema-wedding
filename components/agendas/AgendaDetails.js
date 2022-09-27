import Image from "next/image";

const AgendaDetails = () => {
  return (
    <div className="flex flex-col items-center text-center gap-12 py-12">
      <h2 className="text-2xl">Agenda</h2>
      <div className="arab-quote">
        <h4 className="arab-text">بسم الله الرحمن الرحيم</h4>
        <p className="arab-translate">
          Dengan menyebut nama Allah Subhanahu Wa Ta&apos;ala yang Maha Pengasih
          dan Maha Penyayang. Berikut ini adalah rangkaian acara pernikahan kami
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h3 className="text-xl">Akad & Resepsi</h3>

        <div>
          <div>
            <Image
              src="/images/agenda/clock.png"
              alt="clock icon"
              width="30px"
              height="30px"
            />
          </div>
          <h4 className="text-lg">Sabtu, 15 Oktober 2022</h4>
          <p className="font-fira text-sm font-light">
            {" "}
            Pukul 09.00 - 14.00 WIB
          </p>
        </div>

        <div>
          <div>
            <Image
              src="/images/agenda/location.png"
              alt="location icon"
              width="30px"
              height="30px"
            />
          </div>
          <h4 className="text-lg">Parna Restaurant</h4>
          <p className="font-fira text-sm font-light">
            Jl. Al Kausar, Cipocok Jaya, Kec. Cipocok Jaya, Kota Serang, Banten
            42121
          </p>
        </div>

        <div className="text-sm font-fira text-dark-green font-semibold bg-white py-2 px-5 rounded-xl mt-12">
          <button>lihat google map</button>
        </div>
      </div>
    </div>
  );
};

export default AgendaDetails;
