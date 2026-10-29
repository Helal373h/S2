export default function Hero({ bg, title, desc, exist, btncontent, icons }) {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-screen bg-cover bg-center bg-no-repeat relative text-white flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl w-140 text-[#CEC7C7] font-bold mb-8 leading-16 [text-align-last:center]">
        {title}
      </h1>

      <p className="text-lg font-bold w-247 text-[#CEC7C7] mb-12 [text-align-last:center]">
        {desc}
      </p>

      {exist ? (
        <button className="w-64.5 py-2 text-[#EEEEEE] font-bold bg-linear-to-r from-[#8E1616] to-[#C34B4B]">
          {btncontent}
        </button>
      ) : null}

      <div className=" absolute mt-1.5   h-[266px] w-[50px] mr-350  ">
        {icons && <img src={icons} alt="Icon" className="h-full w-full object-contain" />}
      </div>
    </div>
  );
}