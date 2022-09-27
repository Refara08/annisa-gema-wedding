import Image from "next/image";

const Identity = () => {
  return (
    <section id="identity" className="py-12 md:py-32">
      <div className="arab-quote">
        <h2 className="arab-text">السلام عليكم ورحمة الله وبركاته</h2>
        <p className="arab-translate">
          Dengan menyebut nama Allah Subhanahu Wa Ta'ala yang Maha Pengasih dan
          Maha Penyayang. Kami mengundang Anda untuk menghadiri pernikahan kami
        </p>
      </div>

      {/* foto gema nisa */}
      <div className="relative flex justify-center items-center gap-0 md:gap-8 py-0 md:py-10 w-fit mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/identity/flower-left.png"
            alt="flower png"
            width="65px"
            height="163px"
          />
          <div className="text-center hidden md:block xl:w-[350px]">
            <h2 className="font-dm-serif text-xl">
              Gema Refantero, S.Si., M.T.
            </h2>
            <p className="font-fira text-sm">
              Putra kedua dari pasangan Bpk. H. Hafidin dan Ibu Hj. Fadlunisah
            </p>
          </div>
        </div>
        <div className="scale-75 md:scale-100 w-[300px]">
          <Image
            src="/images/identity/gema-annisa.png"
            alt="picture of gema and annisa"
            width="500px"
            height="933px"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/identity/flower-right.png"
            alt="flower png"
            width="65px"
            height="163px"
          />
          <div className="text-center hidden md:block xl:w-[350px]">
            <h2 className="font-dm-serif text-xl">
              Annisa Dwiseptiana Raskania, S.Pd.
            </h2>
            <p className="font-fira text-sm">
              Putri kedua dari pasangan Alm. Bpk. Rahmat Santoso dan Ibu
              Kurniasih
            </p>
          </div>
        </div>
        <div className="lg:block hidden absolute top-14 -translate-x-0">
          <Image
            src="/images/identity/ring.png"
            alt="ring icon"
            width="61px"
            height="65px"
          />
        </div>
      </div>

      {/* identitas gema nisa */}
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <div className="block md:hidden">
          <h2 className="font-dm-serif text-xl">
            Annisa Dwiseptiana Raskania, S.Pd.
          </h2>
          <p className="font-fira text-sm">
            Putri kedua dari pasangan Alm. Bpk. Rahmat Santoso dan Ibu Kurniasih
          </p>
        </div>
        <div className="block md:hidden">
          <Image
            src="/images/identity/ring.png"
            alt="ring icon"
            width="61px"
            height="65px"
          />
        </div>
        <div className="block md:hidden">
          <h2 className="font-dm-serif text-xl">Gema Refantero, S.Si., M.T.</h2>
          <p className="font-fira text-sm">
            Putra kedua dari pasangan Bpk. H. Hafidin dan Ibu Hj. Fadlunisah
          </p>
        </div>
      </div>
    </section>
  );
};

export default Identity;
