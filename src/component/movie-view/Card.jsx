import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaRankingStar } from "react-icons/fa6";
const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL

  return (
    <div className=" dark:bg-[#1e1e1e] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300  text-white ">
      <div className="w-full h-[250px] overflow-hidden">
        <img
          src={url + item.poster_path}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 space-y-2  bg-brown-300">
        <h3 className="text-lg font-semibold text-gray-500 dark:text-white truncate">
          {item.title}
        </h3>

        {/* Rating (optional) */}
        {item.vote_average && (
          <div className="flex items-center gap-3 text-yellow-400 text-2xl ">
            <FaRankingStar/>
            <span className="text-sm font-medium text-gray-400 dark:text-gray-300">
              {item.vote_average} / 10
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default React.memo(Card)

