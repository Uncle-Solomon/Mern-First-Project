import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navitemsinfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "FAQ" },
];

const NavItem = ({ name }) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4">
        {name}
      </a>
      <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };
  return (
    <div>
      <section>
        <header className="container mx-auto px-5 py-5 flex justify-between items-center">
          <div>
            <img src={images.Logo} alt="logo" className="w-16" />
          </div>
          <div className="z-50 lg:hidden">
            {nav ? (
              <AiOutlineClose onClick={handleNav} className="w-6 h-6" />
            ) : (
              <AiOutlineMenu onClick={handleNav} className="w-6 h-6" />
            )}
          </div>
          <div
            className={`${
              nav ? "right-0" : "-right-full"
            } transition-all duration-500 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] fixed w-full lg:w-auto top-0 bottom-0 flex flex-col justify-center lg:static lg:flex-row lg:justify-end gap-x-9 items-center`}
          >
            <ul className="flex items-center gap-y-5 text-white lg:text-dark-soft flex-col lg:flex-row gap-x-5 font-semibold">
              {navitemsinfo.map((item) => (
                <NavItem key={item.name} name={item.name} />
              ))}
            </ul>
            <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              {" "}
              Sign In
            </button>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Header;
