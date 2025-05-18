import React from 'react'
import Card from './Card'

const MovieView = ({data}) => {   

  
   
  return (
    <div className=' container mx-auto grid lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2 mb-[118px] mt-28'>
        {data?.map((item)=>(
      <Card key={item.id} item={item} />
        ))}
    </div>
  )
}

export default React.memo(MovieView)
