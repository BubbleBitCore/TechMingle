import React from "react";
import gift from "../assets/christmas gift.png";
import { useNavigate } from "react-router-dom";

const HomeCards = ({
  image,
  heading,
  cardtitle,
  isAvailable,
  btnColor,
  link,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-12 col-span-1 items-center">
        <img className=" w-96 h-64" src={image}></img>
        <div className="flex flex-col gap-3 items-center ">
          <p className="tracking-tight">{heading}</p>
          <span className="flex items-center gap-2">
            <p className="font-bold text-3xl tracking-tight ">{cardtitle}</p>

            {isAvailable ? (
              <></>
            ) : (
              <>
                <img className="w-10 h-8" src={gift} alt="gift img"></img>
                <p className="tracking-tight text-green-500">Coming Soon</p>
              </>
            )}
          </span>
          <button
            className={`p-2 px-8 rounded-full ${btnColor} text-[20px]`}
            onClick={() => {
              navigate(link);
            }}
          >
            Visit
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
