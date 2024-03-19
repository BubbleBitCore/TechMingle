import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import BetaTest from "../components/BetaTest";

const Home = ({ Header }) => {
  const [demoLoading, setDemoLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDemoLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4 khushi">
      <Header urlName="TechMingle" />
      <div className="mt-1 mb-2 h-full w-full flex justify-center items-center">
        {demoLoading ? <Spinner /> : <BetaTest />}
      </div>
    </div>
  );
};

export default Home;
