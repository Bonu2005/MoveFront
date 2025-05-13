
import { useFetch } from '@/hooks/useFetch'
import MovieView from '@/movie-view/MovieView';
import React from 'react'

const Home = () => {
   const {data,error,loading} = useFetch("/discover/movie")
   console.log(data);
   
  return (
    <div>
      <MovieView data={data?.results}/>
    </div>
  )
}

export default React.memo(Home)
