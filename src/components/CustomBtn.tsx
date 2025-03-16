import { FC } from "react";

const CustomBtn: FC<{ title: string, color: string, onClickAction: () => unknown }> = ({
  title,
  color,
  onClickAction,
}) => {
  return (
    <button
      className={`px-8 py-3 text-white rounded-full text-xs font-medium cursor-pointer`}
      style={{backgroundColor: color}}
      onClick={onClickAction}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
