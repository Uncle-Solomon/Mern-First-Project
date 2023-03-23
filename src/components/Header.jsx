import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navitemsinfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
  { name: "Pricing", type: "link" },
  { name: "FAQ", type: "link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prevdropdown) => !prevdropdown);
  };
  return (
    <li className="relative group flex-col">
      {item.type === "link" ? (
        <div>
          <a href="/" className="px-4">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdown}
          >
            <span> {item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page) => (
                <a
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
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
      <section className="fixed top-0 left-0 right-0 z-50 bg-white">
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
                <NavItem key={item.name} item={item} />
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
