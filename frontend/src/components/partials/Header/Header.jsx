import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="border border-gray-900 flex h-16 items-center justify-between px-5 fixed w-full bg-black">
        {/* logo */}
        <div className="flex">
          <h1 className="text-4xl font-bold text-cyan-100"><a href="/"> ZOne</a> </h1>
        </div>

        {/* large device navbars */}
        <div className="h-full hidden md:block">
          <ul className="flex gap-6 items-center h-full">
            <li className="hover:text-grey-400">
              <a className="hover:border-b-2" href="/">
                Home
              </a>
            </li>
            <li className="hover:text-grey-400">
              <a className="hover:border-b-2" href="/about">
                About
              </a>
            </li>
            <li className="hover:text-grey-400">
              <a className="hover:border-b-2" href="/service">
                Service
              </a>
            </li>
            <li className="hover:text-grey-400">
              <a className="hover:border-b-2" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="hover:text-grey-400">
              <a className="hover:border-b-2" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button onClick={handleClick} className="md:hidden">
          {show ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true"></i>
          )}
        </button>
      </div>
      <div className={`md:hidden ${show ? "" : "hidden"} fixed w-full top-16`}>
        <ul className="p-3 border border-gray-900 bg-black text-center flex flex-col gap-3">
          <li className="hover:text-grey-400">
            <a className="hover:border-b-2" href="/">
              Home
            </a>
          </li>
          <li className="hover:text-grey-400">
            <a className="hover:border-b-2" href="/about">
              About
            </a>
          </li>
          <li className="hover:text-grey-400">
            <a className="hover:border-b-2" href="/service">
              Service
            </a>
          </li>
          <li className="hover:text-grey-400">
            <a className="hover:border-b-2" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="hover:text-grey-400">
            <a className="hover:border-b-2" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-yellow-400 h-16"></div>
    </>
  );
};

export default Header;
