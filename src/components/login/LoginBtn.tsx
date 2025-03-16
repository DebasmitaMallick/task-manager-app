import { FcGoogle } from "react-icons/fc";
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User, UserCredential } from "firebase/auth";
import { db, signInWithGoogle } from "../../firebase-config";
const LoginBtn = ( ) => {
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithGoogle()
      .then(async (res: UserCredential) => {
        console.log("resp", res);
        if (res.user) {
          console.log("success");
          createUser(res.user);
          navigate("/task");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const usersRef = collection(db, "users");

  const createUser = async (user: User) => {
    const data = {
      email: user.email,
      name: user.displayName,
      role: "",
      pictureUrl: user.photoURL,
    };
    console.log(data);
    const userId = user.uid.toString();

    const userDocRef = doc(usersRef, userId);

    await setDoc(userDocRef, data)
      .then(() => {
        toast.success(`Welcome to TaskBuddy ${data.name}!`);
      })
      .catch((error) => {
        toast.error("Error logging in: " + error);
      });
  };
  return (
    <button
      onClick={handleClick}
      className="bg-[#292929] rounded-2xl text-white flex gap-2 py-3 px-14 items-center cursor-pointer"
    >
      <FcGoogle size={20} /> <div className="text-lg font-medium">Continue with Google</div>
    </button>
  );
};

export default LoginBtn;
