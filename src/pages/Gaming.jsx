import { useEffect, useState } from "react";
import BetaTest from "../components/BetaTest";
import Spinner from "../components/Spinner";

const Gaming = ({ Header }) => {
  const [demoLoading, setDemoLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDemoLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
      <Header urlName="Gaming" />
      <div className="mt-1 mb-2 h-full w-full flex justify-center items-center">
        {demoLoading ? <Spinner /> : <BetaTest />}
      </div>
    </div>
  );
};

export default Gaming;
