import Image from "next/image";

const Gift = () => {
  return (
    <section id="gift" className="relative">
      <div className="md:absolute md:w-full md:bottom-0 md:right-0 md:-z-10">
        <div className="md:w-[40%]">
          <Image
            src="/images/gift/bg-gift.png"
            alt="mountain view background"
            width="500px"
            height="401px"
            layout="responsive"
          />
        </div>
      </div>

      <div className="custom-container py-24">
        <div className="text-center arab-quote mb-16">
          <h2 className="heading-1">Hadiah & ucapan</h2>
          <p className="arab-translate">
            Doa dan restu anda merupakan karunia yang berarti bagi kami, jika
            memberi adalah ungkapan tanda kasih anda, anda dapat mengirimkannya
            melalui
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-24">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[50%] md:w-[250px]">
              <Image
                src="/images/gift/bca.png"
                alt="bca icon"
                width="310px"
                height="100px"
                layout="responsive"
              />
            </div>
            <div className="text-center">
              <h4 className="font-fira text-base lg:text-lg">
                No rekening: 2330146772
              </h4>
              <h4 className="font-fira text-base lg:text-lg">
                A/n: Annisa Dwiseptiana Raskania
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-[50%] md:w-[250px]">
              <Image
                src="/images/gift/bni.png"
                alt="bca icon"
                width="316px"
                height="90px"
                layout="responsive"
              />
            </div>
            <div className="text-center">
              <h4 className="font-fira text-base lg:text-lg">
                No rekening: 986244128
              </h4>
              <h4 className="font-fira text-base lg:text-lg">
                A/n: Annisa Dwiseptiana Raskania
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
