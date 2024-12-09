import React, { useState } from "react";
import Image from "./Image";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/*LOGO*/}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image scr="logo.png" alt="logo" w={32} h={32} />
        <span>Blog</span>
      </div>
      {/*mobile menu*/}
      <div className="md:hidden">
        <div
          className="text-4xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "≡"}
        </div>
        {/*mobile menu list*/}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="py-2 px-4 rounded-3xl text-white bg-blue-800">
              Login
            </button>
          </a>
        </div>
      </div>

      {/*Desktop menu*/}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="py-2 px-4 rounded-3xl text-white bg-blue-800">
            Login
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
