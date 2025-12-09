import { useRef, useState } from "react";

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
        className="bg-white px-3 py-1 rounded shadow hover:bg-gray-100"
      >
        {isPlaying ? "Disable Sound" : "Enable Sound"}
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
