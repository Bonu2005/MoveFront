import React from 'react'
import Card from './Card'

const MovieView = ({data}) => {
    console.log(data);
    
  return (
    <div className=' container mx-auto grid lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2 mb-[118px]'>
        {data?.map((item)=>(
      <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default React.memo(MovieView)
