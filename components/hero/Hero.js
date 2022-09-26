import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative h-screen flex flex-col items-center justify-center gap-24 md:gap-28">
        {/* nama nisa gema dan ornamen */}
        <div className="relative">
          <h1 className="font-yaseva flex flex-col items-center leading-7 text-3xl md:text-5xl">
            <span>Annisa</span>
            <span>&</span>
            <span>Gema</span>
          </h1>
          <div className="absolute top-0 -translate-x-2 md:-translate-x-4 md:translate-y-8 translate-y-4 scale-[280%] md:scale-[300%]">
            <Image
              src={"/images/hero/flowers.png"}
              alt="flowers ornaments"
              width={"300px"}
              height="220px"
            />
          </div>
        </div>

        {/* kalimat mengundang.. */}
        <div className="w-[75%]">
          <h2 className="font-sacramento text-2xl md:text-4xl text-center">
            mengundang Faris & pasangan ke pernikahan kami
          </h2>
        </div>

        {/* tanggal pernikahan */}
        <div>
          <h2 className="font-prata md:text-lg">Sabtu, 15 Oktober 2022</h2>
        </div>

        {/* background */}
        <div className="absolute bottom-36 md:-bottom-20  -z-10  w-full">
          <Image
            src={"/images/hero/bg-main.png"}
            alt="main background of hero section"
            width={"390px"}
            height={"166px"}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
