import { FC } from "react";

const SelectBtn: FC<{options: string[]}> = ({ options, ...props }) => {
  return (
    <select {...props} className="rounded-3xl w-32 bg-white text-center py-2 border-2 border-stone-300 outline-0 cursor-pointer text-stone-500 font-medium">
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default SelectBtn;
