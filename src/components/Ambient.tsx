import { useRef, useState } from "react";
import VolumeOff from "../assets/icons/volume_off.svg";
import VolumeOn from "../assets/icons/volume_on.svg";

export default function Ambient() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const enableSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
    audio.loop = true;

    audio
      .play()
      .then(() => console.log("Audio is playing"))
      .catch((err) => console.error("Error playing audio:", err));
    setIsPlaying(true);
  };

  const disableSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div className="z-[9999] fixed bottom-4 right-4">
      <button
        onClick={isPlaying ? disableSound : enableSound}
        className=" py-1 rounded shadow  size-8 flex items-center justify-center"
      >
        {isPlaying ? <img src={VolumeOn} /> : <img src={VolumeOff} />}
      </button>

      <audio ref={audioRef}>
        <source
          src={import.meta.env.BASE_URL + "audio/ambient.mp3"}
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
