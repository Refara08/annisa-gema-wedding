import Image from "next/image";

const AgendaDetails = () => {
  return (
    <div className="flex flex-col items-center text-center gap-12 py-12">
      <h2 className="heading-1">Agenda</h2>
      <div className="arab-quote">
        <h4 className="arab-text">بسم الله الرحمن الرحيم</h4>
        <p className="arab-translate">
          Dengan menyebut nama Allah Subhanahu Wa Ta&apos;ala yang Maha Pengasih
          dan Maha Penyayang. Berikut ini adalah rangkaian acara pernikahan kami
        </p>
      </div>

      <h3 className="heading-2 lg:block hidden">Akad & Resepsi</h3>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start gap-6">
        <h3 className="heading-2 block lg:hidden">Akad & Resepsi</h3>

        <div className="flex flex-col gap-1 lg:w-[300px] lg:text-right lg:items-start">
          <div>
            <Image
              src="/images/agenda/clock.png"
              alt="clock icon"
              width="30px"
              height="30px"
            />
          </div>
          <h4 className="heading-3">Sabtu, 15 Oktober 2022</h4>
          <p className="font-fira text-sm font-light">
            {" "}
            Pukul 09.00 - 14.00 WIB
          </p>
        </div>

        <div className="flex flex-col gap-1 w-[80%] mx-auto lg:mx-0 lg:w-[300px] lg:text-left lg:items-start">
          <div>
            <Image
              src="/images/agenda/location.png"
              alt="location icon"
              width="30px"
              height="30px"
            />
          </div>
          <h4 className="heading-3">Parna Restaurant</h4>
          <p className="font-fira text-sm font-light">
            Jl. Al Kausar, Cipocok Jaya, Kec. Cipocok Jaya, Kota Serang, Banten
            42121
          </p>
          <div className=" w-fit mx-auto lg:mx-0 mt-4">
            <a
              href="https://www.google.com/maps/place/PARNA/@-6.1329864,106.166618,15z/data=!4m6!3m5!1s0x2e41f55b9fbed5a3:0x2f224fc8066351bf!8m2!3d-6.1329864!4d106.166618!16s%2Fg%2F11ppqt0lpm"
              target="_blank"
              rel="noreferrer"
              className="button text-dark-green bg-white "
            >
              lihat google map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaDetails;
