import Logo from "../assets/logof.png"
import IN from "../assets/ic Linkedin.png"
import FC from "../assets/ic Facebook.png"
import TW from "../assets/ic Twitter.png"

export default function Footer() {
  return (
    <div className=" bg-[#EBEBEB] flex  ">
      <footer className="ml-[172px]">
        <a href="/" style={{
          display: "flex",
          // alignItems: "center",
          justifySelf: "start",
          textDecoration: "none"
        }}
        >
          <img
            src={Logo}
            alt="Grand Atlas Logo"
            style={{
              width: "151px",
              height: "151px",

              display: "block"
            }}
          />
        </a>
        <p className="w-150px h-19px top-135px left-13px mb-3">+1 (2345) 678-90-12</p>
        <p className="w-140px h-19px top-177px left-11px">support@personal.com</p>

      </footer>

      <div className="ml-[250px] mt-[39px]  ">
        <p className="mb-2.5 text-[#0A142F]">Quick links</p>
        <div className=" text-[#847D7D]">
          <p className="mb-1">Home</p>
          <p className="mb-1">Inventories</p>
          <p className="mb-1">Zones</p>
          <p className="mb-1">Developers</p>
          <p className="mb-1">Contact Us</p>
        </div>
      </div>

      <div className="ml-[250px] mt-[39px] bg-[#EBEBEB] ">
        <p className="mb-2.5 text-[#0A142F]">About</p>
        <div className=" text-[#847D7D]">
          <p className="mb-1">Grand Atlas</p>
          <p className="mb-1">Privacy Policy</p>
          <p className="mb-1">Legal</p>
          <p className="mb-1">Help</p>
          <p className="mb-1">Support </p>
        </div>
      </div>

      <div className="min-h-screen bg-[#EBEBEB] p-10 ml-8">

        <div>
          <p className="text-[#0A142F] mb-[25px] ">Get In touch</p>
        </div>

        <div className="flex h-[42px] w-[300px] overflow-hidden rounded-[13px] border-2 border-[#991b1e]">

          {/* Input */}
          <input
            type="text"
            placeholder="Get product updates"
            className=" flex-1  h-[17px] w-[127px] mt-1.5 ml-1 text-gray-700  placeholder:text-[#aaa5a5]"
          />

          {/* Button */}
          <button
            type="button"
            className="flex w-[60px]  items-center justify-center  bg-[#991b1e] text-[40px] text-white transition-colors hover:bg-[#7f171a] "
          >
            →
          </button>

        </div>

        <div className="flex mt-1.5">
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-[#eee3e3]">
            <img
              src={IN}
              alt="LinkedIn"
              className="h-[11.8px] w-[11.8px] object-contain"
            />
          </div>

          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-[#eee3e3] ml-2 mr-2">
            <img
              src={FC}
              alt="facebook"
              className="h-[11.8px] w-[11.8px] object-contain"
            />
          </div>

          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-[#eee3e3]">
            <img
              src={TW}
              alt="twiter"
              className="h-[11.8px] w-[11.8px] object-contain"
            />
          </div>
        </div>

      </div>

      
      <div className="absolute left-0 right-0 mt-[220px] border-t border-[#C9C9C9]"></div>
      <p className="absolute left-1/2 mt-[250px] -translate-x-1/2 text-[13px] text-[#0A142F]">
        © 2020 Lift Media. All rights reserved
      </p>
    </div>
  );
}