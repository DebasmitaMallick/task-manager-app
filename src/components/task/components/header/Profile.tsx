import { useAuth } from "../../../../context/authContext";
import LogoutBtn from "./LogoutBtn";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div id="profile" className="relative">
      <div className="flex gap-1.5 items-center">
        <img
          src={user?.photoURL as string}
          alt="profile-img"
          className="w-[35px] h-auto rounded-full"
        />
        <p className="font-medium text-stone-600">
          {user?.displayName?.split(" ")[0]}
        </p>
      </div>
      <LogoutBtn />
    </div>
  );
};

export default Profile;
