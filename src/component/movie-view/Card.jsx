import { useStateValue } from '@/context';
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaRankingStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL
  const navigate = useNavigate()
  const [state, dispatch] = useStateValue()
  return (


    <div className=" dark:bg-[#1e1e1e] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300  text-white' ">
      <div className="w-full overflow-hidden flex flex-1 relative">
        <img onClick={() => navigate(`/movie/${item.id}`)} className='object-cover' loading='lazy' src={url + item.poster_path} alt={item.title} />
        <button onClick={() => dispatch({ type: "SAVED", payload: item })} className='absolute top-2 right-2 z-10 p-2 text-2xl text-red-700'>
          {state.saved.some(({ id }) => id == item.id) ?<FaHeart /> :<FaRegHeart />   }
        </button>
      </div>
      <div className="p-4 space-y-2  bg-brown-300">
        <h3 className="text-lg font-semibold text-gray-500 dark:text-white truncate">
          {item.title}
        </h3>
        {item.vote_average && (
          <div className="flex items-center gap-3 text-yellow-400 text-2xl ">
            <FaRankingStar />
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

