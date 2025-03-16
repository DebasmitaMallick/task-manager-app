import { FC } from "react";
import { ClipboardList } from "lucide-react";

const Logo: FC<{ color: string }> = ({ color = "black" }) => {
  return (
    <div id="logo" className={`flex gap-2 text-[${color}] items-center pb-2`}>
      <ClipboardList size={30} />{" "}
      <div className="text-2xl font-medium">TaskBuddy</div>
    </div>
  );
};

export default Logo;
