import { BiSolidRightArrow } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import P_language from "./P_language";

function Content() {
  const progLanguage = [
    { icon: <FaHtml5 size={20} />, lan: "HTML5" },

    { icon: <IoLogoCss3 size={20} />, lan: "Css3" },

    { icon: <IoLogoJavascript size={20} />, lan: "JavaScript" },

    { icon: <FaReact size={20} />, lan: "Reactjs" },
  ];
  return (
    <div className="bg-stone-900 flex justify-center gap-16 box-border py-8">
      <div className="w-[20%] ">
        <img
          src="./pic3.jpg"
          alt="A picture of me coding."
          className="size-80 rounded-md ml-3"
        />
      </div>
      <div className="text-white max-w-[70%]">
        <h3 className="font-bold flex">
          <span className="pt-2 pr-1 text-sm text-pink-600">
            <BiSolidRightArrow size={12} />
          </span>
          About Me
        </h3>
        <h1 className="font-bold text-2xl ">Who Am I</h1>
        <p className="mt-3 text-zinc-400 text-justify ">
          I am a passionate junior frontend web developer with a focus on
          building dynamic, user-friendly web applications using React. With
          less than a year of professional experience, I am continuously
          improving my skills in HTML, CSS, JavaScript, and modern frontend
          technologies. I have a strong foundation in React, where I have had
          the opportunity to build interactive and responsive web interfaces
          while honing my knowledge of state management and component-based
          architecture. I thrive in collaborative environments and am always
          eager to learn new tools and frameworks to expand my technical
          expertise. My problem-solving mindset drives me to tackle challenges
          head-on, and I am excited about contributing to projects that deliver
          exceptional user experiences. Whether I am debugging code, learning
          new libraries, or staying updated on frontend trends, I am committed
          to growing as a developer and becoming a valuable asset to any team.
        </p>
        <div className="flex justify-evenly flex-wrap border-solid border-2 border-orange mt-5 rounded-md">
          {progLanguage.map((item, index) => {
            return (
              <div key={index}>
                <P_language language={item} />
              </div>
            );
          })}
        </div>
        <button className="box-border py-1 px-6 bg-red-600 text-white rounded-md font-medium mt-5 hover:bg-orange-500">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Content;
