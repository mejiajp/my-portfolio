// import React from "react";
// import "@/src/styles/navigation.css";

// interface NavContentProps {
//   isOpen: boolean;
// }

// const NavContent: React.FC<NavContentProps> = ({ isOpen }) => {
//   return (
//     <div
//       className={`fixed inset-0 bg-white transition-opacity duration-300 ease-in-out ${
//         isOpen ? "slide-down" : "slide-up"
//       }`}
//     >
//       <h2 className="text-center">Something here</h2>
//       <p className="text-center">sa</p>
//     </div>
//   );
// };

// export default NavContent;

import "@/src/styles/navigation.css";
import Linkedin from "@/public/svg/linkedin-02-stroke-rounded";
import Facebook from "@/public/svg/facebook-02-stroke-rounded";
import React from "react";

interface YourComponentProps {
  word: string;
  font: string;
}

const YourComponent: React.FC<YourComponentProps> = ({ word, font }) => {
  const quantity = word.length;

  const fontStyle =
    font === "special" ? "Poiret One, cursive" : "Raleway, sans-serif";
  return (
    <ul
      style={
        {
          "--time": ".4s",
          "--quantity": quantity,
          fontFamily: fontStyle,
        } as React.CSSProperties
      }
      className="flex py-4"
    >
      {Array.from({ length: quantity }, (_, index) => (
        <li
          key={index}
          style={{ "--index": `${index + 1}` } as React.CSSProperties}
          className=""
        >
          {word[index]}
        </li>
      ))}
    </ul>
  );
};

const NavContent = () => {
  return (
    <div
      className={`fixed inset-0 bg-primary text-[#696969] flex overflow-hidden`}
    >
      <div className="w-[65%] h-full flex justify-center items-center text-9xl font-light">
        <div className="w-full px-40">
          <div className="w-full flex relative overflow-hidden cylinder h-[120px]">
            <div className=" w-full">
              <YourComponent word={"Home"} font={"special"} />
              <YourComponent word={"Home"} font={"normal"} />
            </div>
            <p className="text-xl ">01</p>
          </div>
          <div className="w-full flex relative overflow-hidden cylinder h-[120px]">
            <div className="w-full">
              <YourComponent word={"Work"} font={"special"} />
              <YourComponent word={"Work"} font={"normal"} />
            </div>
            <p className="text-xl ">02</p>
          </div>
          <div className="w-full flex relative overflow-hidden  cylinder h-[120px]">
            <div className="w-full">
              <YourComponent word={"About"} font={"special"} />
              <YourComponent word={"About"} font={"normal"} />
            </div>
            <p className="text-xl ">03</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="space-y-4 mt-20 ">
          <div>
            <p>Get in touch</p>
            <u>Send me an email</u>
          </div>
          <div className="">
            <p> More about me in socials </p>
            <div className="flex space-x-2">
              <div className="w-10 h-10 border border-[#696969] flex justify-center items-center rounded-full hover:border-blue-500 group">
                <Linkedin className="text-[#696969] group-hover:text-blue-500" />
              </div>
              <div className="w-10 h-10 border border-[#696969] flex justify-center items-center rounded-full hover:border-blue-500 group">
                <Facebook className="text-[#696969] group-hover:text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavContent;
