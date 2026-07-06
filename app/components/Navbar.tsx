"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";

const menus = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const btnCircles = [
  {
    name: "X",
    href: "/",
    color: "bg-blue-500",
  },
  {
    name: "X",
    href: "/products",
    color: "bg-red-500",
  },
  {
    name: "X",
    href: "/about",
    color: "bg-green-500",
  },
];

function BtnClick() {
  console.log("clicked");
}

function Navbar() {
  return (
    <nav className="p-4 ">
      <div className="flex">
        <div className="p-4 w-1/4">
          <Sidebar />
        </div>
        <div className="flex p-4 w-2/4">
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="bg-white rounded-2xl w-full  px-2  text-base text-black font-semibold min-w-xl placeholder:text-gray-500 focus:outline-none rounded-e-none"
          />
          <button
            className="bg-blue-500 rounded-2xl py-1.5  px-2.5 text-base text-white  rounded-bl-none rounded-s-none font-semibold"
            type="button"
            aria-label="search"
            onClick={BtnClick}
          >
            Click
          </button>
        </div>
        <div className="flex gap-4 p-4 w-1/4">
          {/* {btnCircles.map((btn) => (
            <button
              key={btn.href}
              className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${btn.color}`}
            >
              {btn.name}
            </button>
          ))} */}
        </div>
      </div>
      <div className="text-white font-bold text-2xl p-2 text-center">
        List Management
      </div>
      <div className="flex gap-4 p-2 w-full justify-center">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="bg-[#253D90] text-white w-36 text-center font-semibold rounded-md p-2 transition hover:bg-yellow-500"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
