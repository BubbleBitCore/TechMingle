import podcastheadphoneimg from "../assets/images/podcastheadphone.png";
import podcastgirl2 from "../assets/images/podcastgirl2.png";
import { Link } from "react-router-dom";
import audio from "../assets/gifs/audio.gif";
import { useSelector } from "react-redux";

const PodcastLanding = ({ Header }) => {
  const podcastCount = 500;
  const subscriberCount = 27;
  const listenerCount = 398;
  const viewerCount = 909;
  // Mode is handled here
  const mode = useSelector((state) => state.common.mode);
  return (
    <div className="flex flex-col h-full w-full pr-8 max-sm:px-4 ">
      <Header urlName="Podcast" />
      {/*content */}
      <div className="flex flex-col-reverse sm:gap-6  lg:flex-row overflow-y-auto h-full sm:pl-10 sm:pt-10 max-sm:py-7">
        <div className="flex flex-col w-1/4 gap-5 max-lg:w-full lg:h-[90%]">
          <div className="flex justify-end sm:h-[80%] max-lg:pt-10">
            <div
              className={` ${
                mode ? "bg-orange-500" : "bg-orange-300"
              } w-[90%] max-lg:w-full transition-all`}
            >
              <img
                src={podcastheadphoneimg}
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
          <div
            className={`flex ${
              mode ? "bg-[#6ee659e5]" : "bg-[#b4e173]"
            } bg-[#b4e173] w-full sm:h-[15%] justify-evenly max-sm:p-4`}
          >
            <div className="flex flex-col justify-center items-center select-none">
              <p className="text-xl font-semibold">{subscriberCount}</p>
              <p className="text-xs">Subsriber</p>
            </div>
            <div className="flex flex-col justify-center items-center select-none">
              <p className="text-xl font-semibold">{listenerCount}</p>
              <p className="text-xs ">Listener</p>
            </div>
            <div className="flex flex-col justify-center items-center select-none">
              <p className="text-xl font-semibold">{viewerCount}</p>
              <p className="text-xs ">Viewer</p>
            </div>
          </div>
        </div>
        <div className="flex w-1/4 max-lg:w-full lg:h-[90%] ">
          <div className="flex flex-col sm:gap-5 w-[95%] max-lg:w-[80%] max-sm:w-full">
            <div className="flex gap-2 h-[12%] max-lg:h-[6%] max-md:h-[8%] max-sm:h-[10%] max-sm:p-4 rounded-full items-center justify-center max-sm:w-full max-sm:mb-10">
              <div className="flex bg-[#FD0B00] rounded-full items-center justify-center  ">
                <i className="ri-play-fill text-white text-3xl max-sm:text-4xl  p-1 px-2 rounded-full"></i>
              </div>
              <img className="w-56  max-sm:w-[85%] " src={audio}></img>
            </div>
            <div
              className={`${
                mode ? "bg-purple-500 " : "bg-purple-300 "
              } transition-all sm:h-[83%] max-sm:w-full`}
            >
              <img
                src={podcastgirl2}
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
          <div
            className={`flex ${
              mode ? "bg-[#0B0D10]" : "bg-white"
            } transition-all duration-500 h-[135px] w-[145px] max-sm:h-[100px] max-sm:w-[105px] items-center justify-center self-end mb-[-30px] max-sm:mb-[85px] ml-[-95px] max-sm:ml-[-155px] rounded-full`}
          >
            <div className="flex flex-col bg-blue-600 h-[115px] w-[120px] max-sm:h-[90px] max-sm:w-[95px] rounded-full items-center justify-center select-none">
              <p className="text-3xl max-sm:text-xl text-white font-bold">
                {podcastCount}+
              </p>
              <p className="text-white font-bold max-sm:text-sm">Podcasts</p>
            </div>
          </div>
          <div
            className={`self-end after:content-[''] mb-[-15px] max-sm:mb-[85px] ml-[-5px] max-sm:ml-[7px] after:block after:border-t-4 ${
              mode ? "after:border-lime-400" : "after:border-black"
            } transition-all after:w-8 after:h-9 after:transform after:rotate-30 after:transform-origin-bottom`}
          ></div>
          <div
            className={`self-end after:content-[''] mb-[-45px] max-sm:mb-[55px] ml-[-60px] max-sm:ml-[-58px] after:block after:border-t-4 ${
              mode
                ? "after:border-red-500 sm:after:border-purple-500"
                : "after:border-black"
            } transition-all after:w-9 after:h-9 after:transform after:rotate-45 after:transform-origin-0`}
          ></div>
          <div
            className={`self-end after:content-[''] mb-[-55px] max-sm:mb-[45px] ml-[-65px] ml after:block after:border-t-4 ${
              mode ? "after:border-orange-500" : "after:border-black"
            } transition-all after:w-7 after:h-9 after:transform after:rotate-[75deg] after:transform-origin-bottom`}
          ></div>
        </div>

        <div className="flex flex-col gap-10 w-1/2 lg:pl-10 max-lg:w-full sm:h-[90%] ">
          <div className="flex flex-col w-[80%] max-sm:w-full gap-3">
            <span
              className={`monsterrat text-6xl max-sm:text-4xl max-md:text-5xl font-extrabold tracking-wide leading-tight ${
                mode ? "text-purple-600" : "text-zinc-900"
              } transition-all select-none`}
            >
              A New Era of{" "}
              <span className=" text-orange-500 text-justify monsterrat ">
                Podcasting{" "}
              </span>
              for{" "}
              <span
                className={`monsterrat text-6xl max-sm:text-4xl max-md:text-5xl font-extrabold tracking-wide leading-tight  ${
                  mode ? "text-[#39FF14]" : "text-zinc-900"
                } transition-all`}
              >
                Enterpreneurs
              </span>
            </span>
            <p className="text-zinc-400 monsterrat tracking-wide font-bold">
              The best podcast website communicate and make it easy for visitors
              to discover.
            </p>
          </div>
          <div className="max-sm:mb-10">
            <Link
              to="/podcasts"
              className="bg-orange-500 rounded-full p-2 px-6 font-bold text-white hover:bg-orange-600"
            >
              Start Listening{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastLanding;
