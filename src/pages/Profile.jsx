import Spinner from "../components/Spinner";

const Profile = ({ Header }) => {
  return (
    <>
      <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
        <Header urlName="Profile" />
        <div className="mt-1 mb-2 h-full w-full">
          <Spinner />
        </div>
      </div>
    </>
  );
};

export default Profile;
