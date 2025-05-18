import React from 'react'
import icon from "@/assets/EMBLEM.svg"
import google from "@/assets/google.png"
import appstore from "@/assets/appstore.png"
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt } from 'react-icons/fa'
import { PiQuestionBold } from "react-icons/pi";
import { RiFileList2Line } from "react-icons/ri";
import { ImFilm } from "react-icons/im";
import { HiOutlineFilm } from "react-icons/hi";
import { PiFilmReel } from "react-icons/pi";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { GiNinjaStar } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">

        {/* Логотип и кнопки загрузки */}
        <div className="flex flex-col items-center lg:items-start gap-6 min-w-[150px]">
          <img src={icon} alt="logo" className="w-[150px] object-contain" />
          <img src={google} alt="Google Play" className="w-[150px] object-contain" />
          <img src={appstore} alt="App Store" className="w-[150px] object-contain" />
        </div>

        {/* About */}
        <div className="flex flex-col gap-6 text-center lg:text-left min-w-[160px]">
          <h2 className="font-semibold text-lg">About</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <RiFileList2Line className="text-primary text-2xl" />
              Публичная
            </li>
            <li className="flex items-center gap-2">
              <GiNinjaStar className="text-primary text-2xl" />
              Реклама
            </li>
            <li className="flex items-center gap-2">
              <PiQuestionBold className="text-primary text-2xl" />
              F.A.Q
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary text-xl" />
              Контакты
            </li>
          </ul>
        </div>

        {/* Категории */}
        <div className="flex flex-col gap-6 text-center lg:text-left min-w-[160px]">
          <h2 className="font-semibold text-lg">Категории</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <ImFilm className="text-primary text-2xl" />
              Home
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineFilm className="text-primary text-2xl" />
              Movie
            </li>
            <li className="flex items-center gap-2">
              <PiFilmReel className="text-primary text-2xl" />
              Saved
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineSportsVolleyball className="text-primary text-2xl" />
              Search
            </li>
          </ul>
        </div>

        {/* Контакты и соцсети */}
        <div className="flex flex-col gap-10 text-center lg:text-left min-w-[160px]">
          <div>
            <h2 className="font-semibold text-lg mb-2">Связаться с нами</h2>
            <a href="tel:+998958973338" className="hover:underline inline-block text-lg">+998 (95) 897-33-38</a>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <p>Социальные сети</p>
            <div className="flex gap-6 text-2xl">
              <FaInstagram className="hover:text-[#E4405F] transition-colors duration-300 cursor-pointer" />
              <FaFacebook className="hover:text-[#1877F2] transition-colors duration-300 cursor-pointer" />
              <FaYoutube className="hover:text-[#FF0000] transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
