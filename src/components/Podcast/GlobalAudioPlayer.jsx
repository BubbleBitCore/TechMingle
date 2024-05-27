import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentTime,
  setDuration,
  setIsPlaying,
  setBufferedTime,
} from "../../slices/podcastSlice";

const GlobalAudioPlayer = ({ audioRef }) => {
  const nowPlaying = useSelector((state) => state.podcast.nowPlaying);
  const isRepeating = useSelector((state) => state.podcast.isRepeating);
  const isPlaying = useSelector((state) => state.podcast.isPlaying);
  const volume = useSelector((state) => state.podcast.volume);

  const dispatch = useDispatch();
  const [prevNowPlaying, setPreviousNowPlaying] = useState(nowPlaying);
  const [loaded, setLoaded] = useState(false);

  const handleEnded = () => {
    if (isRepeating) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (prevNowPlaying !== nowPlaying) {
      audioRef.current.currentTime = 0;
      setPreviousNowPlaying(nowPlaying);
    }
  }, [nowPlaying]);

  useEffect(() => {
    if (loaded && isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Play request was interrupted:", error);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, loaded]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <>
      <audio
        ref={audioRef}
        src={nowPlaying.audio}
        onTimeUpdate={(e) => {
          const currentTime = e.target.currentTime;
          dispatch(setCurrentTime(currentTime));
          const buffered = e.target.buffered;
          if (buffered.length > 0) {
            const bufferedTime = buffered.end(buffered.length - 1); // Use the last buffered range
            dispatch(setBufferedTime(bufferedTime));
          }
        }}
        onLoadedMetadata={(e) => {
          dispatch(setDuration(e.target.duration));
          setLoaded(true);
          if (isPlaying) {
            audioRef.current.play().catch((error) => {
              console.error("Play request was interrupted:", error);
            });
          }
        }}
        onPlay={() => {
          dispatch(setIsPlaying(true));
        }}
        onPause={() => {
          dispatch(setIsPlaying(false));
        }}
        onEnded={() => {
          handleEnded();
        }}
      ></audio>
    </>
  );
};

export default GlobalAudioPlayer;
