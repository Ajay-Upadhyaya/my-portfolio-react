import { BiSolidRightArrow } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import Box from "./Box";

function Feature() {
  const boxes = [
    {
      icon: <FaPen size={25} color="red" />,
      heading: "Creative Design",
      para: "Leveraging artistic elements and aesthetic principles to craft visually appealing and engaging user experiences.",
    },
    {
      icon: <FaCode size={25} color="red" />,
      heading: "Clean Code",
      para: "Writing code that is well-structured, readable and maintainable. It involves following coding best practices.",
    },
    {
      icon: <FaLaptop size={25} color="red" />,
      heading: "User Interface",
      para: "Creating intuitive and user-friendly designs that prioritize usability, accessibility and a more seamless user-experience.",
    },
    {
      icon: <FaShoppingBag size={25} color="red" />,
      heading: "User Experience",
      para: "Understanding user behaviors, needs and preferences to create interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      icon: <IoMdFootball size={25} color="red" />,
      heading: "Fast Support",
      para: "Addressing and resolving user-reported issues or inquiries related to the website.",
    },
    {
      icon: <IoFlag size={25} color="red" />,
      heading: "Branding",
      para: "Creating consistent and cohesive brand experiences through the use of logos, color schemes,typography,and other branding assets.",
    },
  ];
  return (
    <div className="bg-zinc-900  text-white box-border p-3">
      <div>
        <h3 className="font-bold flex box-border pl-3">
          <span className="pt-2 pr-1 text-sm text-pink-600">
            <BiSolidRightArrow size={12} />
          </span>
          My Services
        </h3>
        <h2 className="font-bold text-2xl box-border pl-3">What can I do</h2>
      </div>
      <div className="flex flex-wrap border-2 border-red-600  ">
        {boxes.map((item, index) => {
          return (
            <div key={index}>
              <Box services={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feature;
