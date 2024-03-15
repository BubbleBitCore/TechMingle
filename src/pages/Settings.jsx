import Spinner from "../components/Spinner";

const Settings = ({ Header }) => {
  return (
    <>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
        <Header urlName="Settings" />
        <div className="mt-1 mb-2 h-full w-full bg-white">
          <Spinner />
        </div>
      </div>
    </>
  );
};

export default Settings;
