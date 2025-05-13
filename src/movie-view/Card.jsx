import React from 'react'
import { FaStar } from 'react-icons/fa'

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL

  return (
    <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 ">
      <div className="w-full h-[250px] overflow-hidden">
        <img
          src={url + item.poster_path}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {item.title}
        </h3>

        {/* Rating (optional) */}
        {item.vote_average && (
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {item.vote_average} / 10
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default React.memo(Card)

