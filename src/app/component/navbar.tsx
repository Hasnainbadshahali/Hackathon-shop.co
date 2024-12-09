import React from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function navbar() {
  return (
    <header className="bg-white shadow-2xl border-b mx-auto flex flex-col w-[1440px] ">
      <div className="bg-black text-white py-2 text-sm flex justify-between items-center p-20 w-full ">
        <div className="text-center flex-1">
          Sign up and get 20% off to your first order.
          <a href="#" className="underline hover-text-slate-300">
            sign up Now
          </a>
        </div>
        <div className="flex items-center gap-[2px]">
          <div className="text-white text-sm font-normal leading-[21px]">
            <HiMiniXMark className="text-3xl" />
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text 2x1 font-bold text-black px-16">Shop.co</h1>

        <nav className=" md-flex space-x-8 items-center">
          <a href="a" className="text-slate-600 hover:text-black ">
            shop{" "}
          </a>
          <a href="a" className="text-slate-600 hover:text-black ">
            on sale
          </a>
          <a href="a" className="text-slate-600 hover:text-black ">
            New Arrivals
          </a>
          <a href="a" className="text-slate-600 hover:text-black ">
            Brands
          </a>
        </nav>

        {/* search icon */}

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-slate-100 outline-none text-sm"
            />
            <CiSearch />
          </div>
          <IoCartOutline />
          <CgProfile />
        </div>
      </div>
    </header>
  )
}


