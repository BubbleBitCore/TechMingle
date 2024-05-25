import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setCurrentTime,setDuration,setIsPlaying} from "../../slices/podcastSlice";

const GlobalAudioPlayer = ({
  audioRef,
}) => {
  const nowPlaying = useSelector((state) => state.podcast.nowPlaying);
  const isRepeating = useSelector((state)=>state.podcast.isRepeating);
  const isPlaying =  useSelector((state)=>state.podcast.isPlaying);
  const volume = useSelector((state)=>state.podcast.volume);

  const dispatch = useDispatch();
  const [prevNowPlaying,setPreviousNowPlaying] = useState(nowPlaying);

  const handleEnded = () => {
    if (isRepeating) {
      audioRef.current.play();
    }
  };

  useEffect(()=>{
    if(prevNowPlaying !== nowPlaying){
      audioRef.current.currentTime = 0;
      setPreviousNowPlaying(nowPlaying)
    }
    if(isPlaying){
      audioRef.current.play();
    }else{
      audioRef.current.pause();
    }
  },[nowPlaying,isPlaying])

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
          dispatch(setCurrentTime(e.target.currentTime));
        }}
        onLoadedMetadata={(e) => {
          dispatch(setDuration(e.target.duration));
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
