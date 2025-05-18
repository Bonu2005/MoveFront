import React from 'react'

const OnSkeleton = () => {
    return (
        <div className='container mx-auto flex flex-col gap-1.5'>
            <div className='w-full h-[700px] bg-gray-300 animate-pulse rounded-lg'></div>
            <div className='h-[300px] bg-gray-300 animate-pulse rounded-lg'></div>

        </div>
    );
};

export default OnSkeleton;
