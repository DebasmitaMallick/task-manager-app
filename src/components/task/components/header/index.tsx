import Logo from "../../../Logo";
import Profile from "./Profile";

const Header = () => {
  
  return (
    <header className="flex justify-between pt-12 pb-[9px]">
        <Logo color="#2F2F2F" />
        <Profile />
    </header>
  )
}

export default Header