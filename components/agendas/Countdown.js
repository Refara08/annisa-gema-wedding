const Countdown = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center font-dm-serif-display max-w-md mx-auto">
      <h3 className="text-xl sm:text-2xl xl:text-2xl mb-6 tracking-wider">
        Menuju hari pernikahan
      </h3>
      <div className="flex justify-evenly items-start w-full">
        <div className={`time-item days`}>
          <span className={"num-time-item"}>{24}</span>
          <span className={"label-time-item"}>Hari</span>
        </div>
        <div className={"colon"}>:</div> {/* ---------- */}
        <div className={`time-item hours`}>
          <span className={"num-time-item"}>{24}</span>
          <span className={"label-time-item"}>Jam</span>
        </div>
        <div className={"colon"}>:</div> {/* ---------- */}
        <div className={`time-item minutes`}>
          <span className={"num-time-item"}>{24}</span>
          <span className={"label-time-item"}>Menit</span>
        </div>
        <div className={"colon"}>:</div> {/* ---------- */}
        <div className={`time-item seconds`}>
          <span className={"num-time-item"}>{24}</span>
          <span className={"label-time-item"}>Detik</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
