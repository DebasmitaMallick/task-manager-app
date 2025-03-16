const COLOR = "#7B1984";
const Circles = () => {
  return (
    <div id="circles" className={`bg-transparent absolute right-0 bottom-0`}>
      <div
        id="circle"
        className={`bg-transparent w-[500px] h-[500px] rounded-full m-3.5 outline-2 outline-[${COLOR}] outline-offset-[60px] border-2 border-[${COLOR}] ring ring-[${COLOR}] ring-offset-[110px]`}
      ></div>
    </div>
  );
};

export default Circles;
