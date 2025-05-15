import React, { useState } from 'react'
import { IoHomeOutline, IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import logo from "@/assets/LOGOTYPE – BILETICK.svg"
import Vector from "@/assets/Vector.png"
import Vector1 from "@/assets/Vector (1).png"
import Tablet from "@/assets/tablet-line.png"
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { MdOutlineMovie } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header>
      <div className='flex container items-center justify-between mx-auto text-white p-[16px]'>

        <div >
          <img src={logo} alt="" />
        </div>

        <div className='hidden md:flex'>
          <ul className='flex gap-7 items-center justify-center'>
            <NavLink className={"flex flex-col hover:text-[#E4405F] items-center"} to={"/"} >
              <IoHomeOutline className='text-2xl' />
              <span>Home</span>
            </NavLink>

            <NavLink className={"flex flex-col hover:text-[#E4405F] items-center"} to={"/movies"}>
              <MdOutlineMovie className='text-2xl' />
              <span>Movies</span>
            </NavLink>
            <NavLink className={"flex flex-col hover:text-[#E4405F] items-center"} to={"/saved"}>
              <IoBookmarkOutline className='text-2xl' />
              <span>Saved</span>
            </NavLink>
            <NavLink className={"flex flex-col hover:text-[#E4405F] items-center"} to={"/search"}>
              <IoSearchOutline className='text-2xl' />
              <span>Search</span>
            </NavLink>
          </ul>
        </div>

        <div className='hidden  gap-[20px] items-center md:flex'>
          <div className='flex items-center'>
            <div>🌐</div>
            <select name="" id="">
              <option value="">Rus</option>
              <option value="">Eng</option>
              <option value="">Uzbek</option>
            </select>
          </div>


          <div>
            <button className='pt-[18px] pb-[18px] pr-[66px] pl-[66px] bg-primary text-white rounded-[12px]' ><h1>Войти </h1></button>
          </div>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(p => !p)} className='text-2xl text-white'>☰</button>
        </div>

      </div>
      {menuOpen && (
        <div className='md:hidden bg-white shadow-md px-6 py-4 space-y-4'>
          <ul className='space-y-2'>
            <li>🎫 Afisha</li>
            <li>🎬 Kino</li>
            <li>🎵 Concert</li>
            <li>🎭 Theater</li>
          </ul>

          <div className='mt-4 flex flex-col gap-2'>
            <select className='border rounded px-2 py-1'>
              <option value="">Rus</option>
              <option value="">Eng</option>
              <option value="">Uzbek</option>
            </select>
            <button className='py-2 bg-primary text-white rounded-[12px]'>
              Voyti
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
