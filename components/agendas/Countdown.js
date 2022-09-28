import { useState, useEffect } from "react";
import { getReminingTimeUntillMsTimeStamp } from "../../utils/CountdownTimerUtils";

const defaultReminingTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const Countdown = () => {
  // jangan lupa jan - des = 0 - 11
  const tanggalNikah = new Date(2022, 9, 15, 9);
  const countDownTimeStampsMs = tanggalNikah.getTime();

  // countdown content
  const [remainingTime, setRemainingTime] = useState(defaultReminingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimeStampsMs);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [countDownTimeStampsMs]);

  const updateRemainingTime = (countdown) => {
    setRemainingTime(getReminingTimeUntillMsTimeStamp(countdown));
  };

  return (
    <div className="text-white flex flex-col justify-center items-center font-dm-serif-display max-w-md mx-auto">
      <h3 className="heading-1 mb-6">Menuju hari pernikahan</h3>
      <div className="flex justify-evenly items-start w-full">
        <div className={`time-item days`}>
          <span className={"num-time-item"}>{remainingTime.days}</span>
          <span className={"label-time-item"}>Hari</span>
        </div>
        <div className={"colon"}>:</div> {/* ---------- */}
        <div className={`time-item hours`}>
          <span className={"num-time-item"}>{remainingTime.hours}</span>
          <span className={"label-time-item"}>Jam</span>
        </div>
        <div className={"colon"}>:</div> {/* ---------- */}
        <div className={`time-item minutes`}>
          <span className={"num-time-item"}>{remainingTime.minutes}</span>
          <span className={"label-time-item"}>Menit</span>
        </div>
        <div className={"colon"}>:</div> {/* ---------- */}
        <div className={`time-item seconds`}>
          <span className={"num-time-item"}>{remainingTime.seconds}</span>
          <span className={"label-time-item"}>Detik</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
