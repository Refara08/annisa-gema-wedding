import { useContext, useEffect, useRef } from "react";
import AudioModal from "./AudioModal";
import AudioContext from "../../store/audio-context";

import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";

const Audio = () => {
  const audioPlayer = useRef();
  const AudioCtx = useContext(AudioContext);
  const { isPlaying } = AudioCtx;

  const playAudio = () => {
    AudioCtx.updateIsPlaying(true);
    audioPlayer.current.volume = 0.1;
    audioPlayer.current.play();
  };

  const pauseAudio = () => {
    AudioCtx.updateIsPlaying(false);
    audioPlayer.current.volume = 0.1;
    audioPlayer.current.pause();
  };

  // useEffect(() => {
  //   console.log(audioPlayer);
  //   if (isPlaying) {
  //     audioPlayer.current.play();
  //   } else if (!isPlaying) {
  //     audioPlayer.current.pause();
  //   }
  // }, [isPlaying]);

  return (
    <AudioModal>
      <div>
        <audio src="/audio/audio.mp3" ref={audioPlayer}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
      <div>
        {!isPlaying && (
          <button onClick={playAudio}>
            <PlayIcon size="3rem" />
          </button>
        )}
        {isPlaying && (
          <button onClick={pauseAudio}>
            <PauseIcon size="3rem" />
          </button>
        )}
      </div>
    </AudioModal>
  );
};

export default Audio;
