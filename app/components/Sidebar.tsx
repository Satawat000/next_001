"use client";
import React, { useState } from "react";
import Link from "next/link";

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

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md bg-slate-900 text-white shadow-md transition hover:bg-slate-800"
      >
        <span className="h-0.5 w-5 rounded bg-current" />
        <span className="h-0.5 w-5 rounded bg-current" />
        <span className="h-0.5 w-5 rounded bg-current" />
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-slate-900 p-4 text-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-800"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 transition hover:bg-stone-700"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </aside>
    </main>
  );
}

export default Sidebar;
