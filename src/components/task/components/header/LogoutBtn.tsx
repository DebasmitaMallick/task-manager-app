import { TbLogout2 as LogoutIcon } from "react-icons/tb";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success("You have successfully logged out");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <button
      onClick={handleClick}
      className="absolute bottom-[-50px] cursor-pointer flex items-center space-x-2 pl-4 pr-7 py-3 mt-8 bg-[#FFF9F9] border border-[#7b19844c] rounded-2xl"
    >
      <LogoutIcon size={20} />
      <span className="text-sm font-semibold">Logout</span>
    </button>
  );
};

export default LogoutBtn;
