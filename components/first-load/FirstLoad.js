import EnvelopeIcon from "../icons/EnvelopeIcon";

const FirstLoad = ({ update }) => {
  return (
    <section
      id="first-load"
      className="h-screen bg-dark-green text-white-me grid place-items-center"
    >
      <div className="flex flex-col items-center text-center">
        <button onClick={() => update(false)}>
          <div className="relative">
            <EnvelopeIcon size="4rem" />
            <div className="absolute top-0 -right-2 animate-ping w-[10px] h-[10px] rounded-full bg-red-600" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default FirstLoad;
