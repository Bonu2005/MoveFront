import { useFetch } from '@/hooks/useFetch'
import React, { useCallback } from 'react'
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom'
import Genres from '@/component/genres/Genres';
import { Skeleton } from '@mui/material';
import MovieView from '@/component/movie-view/MovieView';

const Movies = () => {
  const [params, setParams] = useSearchParams()
  const page = params.get("page") || 1
  let genres = params.get("genres") || ""
  let with_genres = genres.split("-").join(",").slice(1)

  const { data, error, loading } = useFetch("/discover/movie", { page, with_genres, without_genres: "18,10749,36" })
  console.log(data);


  const handleChangeGenre = useCallback((id) => {
    let array = genres.split("-")
    if (array.includes(id)) {
      genres = array.filter((i) => i !== id).join("-")
    } else {
      genres += `-${id}`
    }

    if (!genres) {
      params.delete("genres")
    } else {
      params.set("genres", genres)
    }
    params.set("page", "1")
    setParams(params)
  }, [params])

  const handleChange = (event, value) => {
    params.set("page", value.toString())
    setParams(params)
  }
  return (
    <div>
      <Genres genres={genres} handleChangeGenre={handleChangeGenre} />
      {loading ? <Skeleton count={20} /> : <MovieView data={data?.results} />}

      <div className='container mx-auto flex justify-center my-10'>
        <Pagination count={data?.total_pages} page={Number(page)} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Movies
