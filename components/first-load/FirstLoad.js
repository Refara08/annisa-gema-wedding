import { useEffect, useRef } from "react";
import gsap from "gsap";

import EnvelopeIcon from "../icons/EnvelopeIcon";

const FirstLoad = ({ update }) => {
  const envelopeRef = useRef();
  const q = gsap.utils.selector(envelopeRef);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        q(".envelope"),
        { opacity: 0, yPercent: -100 },
        { opacity: 1, yPercent: 0, duration: 1 }
      )
      .fromTo(
        q(".content"),
        { opacity: 0, yPercent: 50 },
        { opacity: 1, yPercent: 0, duration: 0.5, stagger: 0.5 }
      );
  });

  return (
    <section
      id="first-load"
      className="h-screen bg-dark-green text-white-me grid place-items-center"
    >
      <div
        ref={envelopeRef}
        className="flex flex-col items-center gap-6 text-center"
      >
        <div className="relative envelope mt-6">
          <EnvelopeIcon size="6rem" />
          <div className="absolute top-0 -right-2 animate-ping w-[10px] h-[10px] rounded-full bg-red-600" />
        </div>
        <div>
          <p className="content">anda menerima sebuah undangan, buka?</p>
          <button
            onClick={() => update(false)}
            className="content bg-white-me text-dark-green py-1 px-5 rounded-xl mt-2 hover:shadow-inner"
          >
            buka
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstLoad;
