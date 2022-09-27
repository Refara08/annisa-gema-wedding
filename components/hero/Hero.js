import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <div className="custom-container">
        <div className="relative h-screen flex flex-col items-center justify-center gap-36 md:gap-28">
          {/* nama nisa gema dan ornamen */}
          <div className="relative ">
            <div className="font-yaseva flex items-center gap-2 leading-8 md:leading-10 text-4xl md:text-5xl">
              <h1 className="flex flex-col items-end">
                <span>Annisa</span>
                <span>Gema</span>
              </h1>
              <h1>
                <span>&</span>
              </h1>
            </div>

            <div className="absolute bottom-0 left-0 -translate-x-[80px] md:-translate-x-[105px] translate-y-[75px] md:translate-y-[95px]">
              <Image
                src="/images/hero/flower-left-wing.png"
                alt="flower ornament left"
                width={"500px"}
                height="382px"
                priority={true}
              />
            </div>

            <div className="absolute bottom-0 right-0 translate-x-[90px] md:translate-x-[120px] translate-y-[100px] md:translate-y-[130px]">
              <Image
                src="/images/hero/flower-right-wing.png"
                alt="flower ornament right"
                width={"500px"}
                height="595px"
                priority={true}
              />
            </div>
          </div>

          {/* kalimat mengundang.. */}
          <div className="w-[75%] flex flex-col items-center gap-12">
            <h2 className="font-sacramento text-2xl md:text-4xl text-center">
              mengundang Faris & pasangan ke pernikahan kami
            </h2>
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
      </div>
    </section>
  );
};

export default Hero;
