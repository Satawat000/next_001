"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
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
    name: "Users",
    href: "/users",
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
        <div className="p-4">
          <Sidebar />
        </div>
        <div className="flex p-4 gap-1">
          {menus.map((menu)=>(
            <div key={menu.href} className="-skew-x-12 p-2 px-4 border border-white/10 bg-slate-950/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]">
              <span className="inline-block -skew-x-12 text-white font-bold">
                <Link href={menu.href}>
                  {menu.name}
                </Link>
              </span>
            </div>

          ))}

        </div>
        {/* <div className="flex p-4 w-2/4">
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
          {btnCircles.map((btn) => (
            <button
              key={btn.href}
              className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${btn.color}`}
            >
              {btn.name}
            </button>
          ))}
        </div> */}
      </div>
      
    </nav>
  );
}

export default Navbar;
