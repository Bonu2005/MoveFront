
import { useFetch } from '@/hooks/useFetch'
import Swiper1 from '@/swiper/swiper';
import Carousel3D from '@/swiperFilms/SwiperFilms';

import React from 'react'

const Home = () => {
   const {data,error,loading} = useFetch("/discover/movie")   
  return (
    <div>
      <Swiper1/>
      <Carousel3D/>

    </div>
  )
}

export default React.memo(Home)
