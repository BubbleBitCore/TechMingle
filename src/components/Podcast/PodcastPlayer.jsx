import { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch, useSelector } from "react-redux";
import { setPlaybackState } from "../../slices/podcastSlice";

const PodcastPlayer = ({
  containerStyle ={},
  player,
  setPlayerPaused,
  showSkipControls = false,
  autoPlay
}) => {
  
  const dispatch = useDispatch();
  const nowPlaying = useSelector((state) => state.podcast.nowPlaying);
  const playbackState = useSelector((state) => state.podcast.playbackState);

  const handlePlay = () => {
    setPlayerPaused(false);
    dispatch(setPlaybackState({ isPlaying: true }));
  };

  const handlePause = () => {
    setPlayerPaused(true);
    dispatch(setPlaybackState({ isPlaying: false }));
  };

  const handleListen = (e) => {
    dispatch(setPlaybackState({ currentTime: e.target.currentTime }));
  };

  useEffect(() => {
    if (player.current && Math.abs(player.current.audio.current.currentTime - playbackState.currentTime) > 0.1) {
      player.current.audio.current.currentTime = playbackState.currentTime +1;
    }
  }, [playbackState.currentTime, player]);

  return (
    <>
      <AudioPlayer
        src={nowPlaying.audio}
        className={"shadow-none transition-all duration-500"}
        style={containerStyle}
        ref={player}
        onPlay={handlePlay}
        onPause={handlePause}
        onListen={handleListen}
        showSkipControls={showSkipControls}
        autoPlay
      />
    </>
  );
};

export default PodcastPlayer;
