import MovieView from '@/component/movie-view/MovieView'
import NotFoundInfo from '@/component/notFoundInfo/NotFoundInfo'
import { useFetch } from '@/hooks/useFetch'
import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Search = () => {
  const [value,setValue] = useState("")
  const handleValue =(e)=>{
    setValue(e.target.value)
  }
  const { data, error, loading } = useFetch(`/search/movie?query=${value}`)
  
  return (
    <>
      
    <div className='text-center'>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        value={value}
        onChange={(e)=>handleValue(e)}
        className="bg-gray-900 rounded-1xl"
        sx={{
          '& .MuiInputBase-input': {
            padding: '12px',
            color: '#ffffff',
          },
          '& .MuiInputLabel-root': {
            color: '#ffffff',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#ffffff',
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#ffffff',
          },
        }}
      />
  {data?.results.length===0?<NotFoundInfo/>:<MovieView data={data?.results} />}
      
    </div>
    </>
  )
}

export default Search
