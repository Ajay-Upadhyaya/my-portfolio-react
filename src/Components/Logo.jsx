import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa";

function Logo() {
  return (
    <div className="bg-neutral-950 text-white flex justify-between py-3">
      <div className="ml-10">
        <img
          src="./logo.png"
          alt="logo"
          className="size-11 rounded-full ml-2"
        />
      </div>
      <div className="flex gap-20 mr-20 ">
        <span className="cursor-pointer hover:text-blue-500">
          <FaFacebook size={30} />
        </span>
        <span className="cursor-pointer hover:text-pink-700">
          {" "}
          <IoLogoInstagram size={30} />{" "}
        </span>
        <span className="cursor-pointer hover:text-blue-400">
          <FaLinkedin size={30} />
        </span>
      </div>
    </div>
  );
}

export default Logo;
