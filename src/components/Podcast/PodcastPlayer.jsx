import AudioPlayer from "react-h5-audio-player";
import { useSelector } from "react-redux";

const PodcastPlayer = ({
  containerStyle ={},
  player,
  setPlayerPaused,
  showSkipControls = false,
  autoPlay
}) => {
  
  const nowPlaying = useSelector((state) => state.podcast.nowPlaying);
  return (
    <>
      <AudioPlayer
        src={nowPlaying.audio}
        className={"shadow-none transition-all duration-500"}
        style={containerStyle}
        ref={player}
        onPlay={() => {
          setPlayerPaused(false);
        }}
        onPause={() => {
          setPlayerPaused(true);
        }}
        showSkipControls={showSkipControls}
        {...(autoPlay && { autoPlay })}
      />
    </>
  );
};

export default PodcastPlayer;
