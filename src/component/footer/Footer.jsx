import React from 'react'
import icon from "@/assets/EMBLEM.svg"
import google from "@/assets/google.png"
import appstore from "@/assets/appstore.png"
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
 <footer>
  <div className="container mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] xl:gap-[210px] text-white bg-dark p-[30px] rounded-[12px] mb-[40px]">
    
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <div className="w-[150px]">
        <img src={icon} alt="logo" />
      </div>
      <div className="w-[150px]">
        <img src={google} alt="Google Play" />
      </div>
      <div className="w-[170px]">
        <img src={appstore} alt="App Store" />
      </div>
    </div>

    <div className="flex flex-col gap-[20px] text-center lg:text-left">
      <h2 className="font-bold text-[16px]">About</h2>
      <ul className="flex flex-col gap-[12px]">
        <li>Публичная</li>
        <li>Реклама</li>
        <li>F.A.Q</li>
        <li>Контакты</li>
      </ul>
    </div>

    <div className="flex flex-col gap-[20px] text-center lg:text-left">
      <h2 className="font-bold text-[16px]">Категории</h2>
      <ul className="flex flex-col gap-[12px]">
        <li>Кино</li>
        <li>Театр</li>
        <li>Концерты</li>
        <li>Спорт</li>
      </ul>
    </div>

    <div className="flex flex-col gap-[40px] text-center lg:text-left">
      <div className="flex flex-col gap-[16px]">
        <h2 className="font-bold text-[16px]">Связаться с нами</h2>
        <a href="tel:+998958973338" className="hover:underline">+998 (95) 897-33-38</a>
      </div>
      <div className="flex flex-col gap-[12px] items-center lg:items-start">
        <p>Социальные сети</p>
        <div className="flex gap-[16px] text-[20px]">
          <FaInstagram className="hover:text-[#E4405F]" />
          <FaFacebook className="hover:text-[#1877F2]" />
          <FaYoutube className="hover:text-[#FF0000]" />
        </div>
      </div>
    </div>

  </div>
</footer>


  )
}

export default Footer
