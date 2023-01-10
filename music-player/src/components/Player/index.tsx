import { FastForward, Pause, Play, Rewind } from "phosphor-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useRef, useState } from "react";
import { convertDurationToTimeString } from "../../utils/convertTimeToTimeString";
import styles from "./index.module.scss";

type Song = {
  audio: string;
  title: string;
  artist: string;
  img_url: string;
};

interface PlayerProps {
  songs: Song[];
  currentSongIndex: number;
  skipSong: (forwards: boolean) => void;
}

export function Player({ songs, currentSongIndex, skipSong }: PlayerProps) {
  const currentSong = songs[currentSongIndex];
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDuration, setSongDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!audioElement.current) {
      return;
    }

    if (isPlaying) {
      if (audioElement.current) {
        audioElement.current.play();
      }
    } else {
      if (audioElement.current) {
        audioElement.current.pause();
      }
    }
  }, [isPlaying]);

  const handleDurationChange = () => {
    if (audioElement.current) {
      setSongDuration(audioElement.current?.duration);
    } else {
      setSongDuration(0);
    }
  };

  const handleSongEnd = () => {
    skipSong(true);
  };

  const setupProgressListener = () => {
    audioElement.current!.currentTime = 0;

    audioElement.current?.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioElement.current!.currentTime));
    });
  };

  const handleSeek = (amount: number) => {
    audioElement.current!.currentTime = amount;
    setProgress(amount);
  };

  return (
    <div className={styles.player}>
      <audio
        autoPlay
        src={currentSong?.audio}
        ref={audioElement}
        onEnded={handleSongEnd}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onDurationChange={handleDurationChange}
        onLoadedMetadata={setupProgressListener}
      ></audio>
      <header>
        <img src={currentSong?.img_url} alt="peace sells album" />
      </header>
      <main className={styles.info}>
        <h1>{currentSong?.title}</h1>
        <span>{currentSong?.artist}</span>
      </main>
      <div className={styles.controls}>
        <button onClick={() => skipSong(false)}>
          <Rewind color="#E1E1E6" weight="fill" size={24} />
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <Pause color="#E1E1E6" weight="fill" size={24} />
          ) : (
            <Play color="#E1E1E6" weight="fill" size={24} />
          )}
        </button>
        <button onClick={() => skipSong(true)}>
          <FastForward color="#E1E1E6" weight="fill" size={24} />
        </button>
      </div>
      <div className={styles.progress}>
        <Slider
          max={songDuration}
          value={progress}
          onChange={handleSeek}
          railStyle={{ background: "#5e586f", height: "6px" }}
          trackStyle={[{ background: "#c1c0c4", height: "6px" }]}
          handleStyle={[{ visibility: "hidden" }]}
        />
        <span>{convertDurationToTimeString(progress ?? 0)}</span>
        <span>{convertDurationToTimeString(songDuration ?? 0)}</span>
      </div>
    </div>
  );
}
