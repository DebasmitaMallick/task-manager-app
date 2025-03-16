import LoginBtn from "../components/login/LoginBtn";
import Circles from "../components/login/Circles";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <div
      id="login-page"
      className="bg-[#FFF9F9] h-screen w-full flex items-center pl-16 overflow-hidden relative"
    >
      <div className="z-20">
        <Logo color="#7B1984" />
        <p className="text-sm w-2/3 pb-8">
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </p>
        <LoginBtn />
      </div>
      <Circles />
    </div>
  );
};

export default Login;
