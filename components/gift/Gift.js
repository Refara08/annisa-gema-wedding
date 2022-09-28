import Image from "next/image";
import Rekening from "./Rekening";

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
          <Rekening
            noRek="2330146772"
            behalfOf="Annisa Dwiseptiana Raskania"
            bank="bca"
            width="310px"
            height="100px"
          />
          <Rekening
            noRek="986244128"
            behalfOf="Annisa Dwiseptiana Raskania"
            bank="bni"
            width="316px"
            height="90px"
          />
        </div>
      </div>
    </section>
  );
};

export default Gift;
