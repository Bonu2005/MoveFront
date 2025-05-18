import React, { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { MdSunny } from "react-icons/md";
const DarkMode = () => {
const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div onClick={()=>setDarkMode(p=>!p)}  className='text-3xl'>
       {darkMode?<MdSunny className=' ' />:<MdOutlineWbSunny className='' />}
    </div>
  )
}

export default DarkMode
