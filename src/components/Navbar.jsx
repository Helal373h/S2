import { Link } from "react-router-dom";
import Logo from "../assets/LogoO.png"


export default function Navbar() {
    return (

        <div  style={{
            width: "1440px",
            height: "105px",
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 40px",
            boxSizing: "border-box"
        }}>
            <a href="/" style={{
                display: "flex",
                alignItems: "center",
                justifySelf: "start",
                textDecoration: "none"
            }}
            >
                <img
                    src={Logo}
                    alt="Grand Atlas Logo"
                    style={{
                        width: "116px",
                        height: "116px",
                        objectFit: "contain",
                        display: "block"
                    }}
                />
            </a>
            <nav className="flex justify-center sticky top-0 gap-x-8 bg-[#FFFFFF] text-white  w-full">

                <p className="cursor-pointer transition-colors text-[#847D7D] hover:text-[#8E1616]">
                    <Link to="\">
                        home
                    </Link>

                </p>
                <p className="cursor-pointer transition-colors text-[#847D7D] hover:text-[#8E1616]">

                    <Link to="\units">
                        Units
                    </Link>
                </p>
                <p className="cursor-pointer transition-colors text-[#847D7D] hover:text-[#8E1616]">


                    <Link to="\zones">
                        zones
                    </Link>
                </p>
                <p className="cursor-pointer transition-colors text-[#847D7D] hover:text-[#8E1616]">

                    <Link to="\developers">
                        developers
                    </Link>

                </p>
                <p className="cursor-pointer transition-colors text-[#847D7D] hover:text-[#8E1616]">

                    <Link to="\Contact">
                        contact us
                    </Link>

                </p>
            </nav>
            <div className="  text-[#FFFFFF] w-110px h-35px rounded-xl flex justify-center pt-2 pr-8 pb-2 pl-8 gap-10px  " style={{
                "backgroundImage": `linear-gradient(to right,#C34B4B,#8E1616)`
            }}  >
                <button>Register</button>
            </div>
        </div>
    );
}