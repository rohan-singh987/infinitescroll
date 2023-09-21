import React from 'react'
import { Bars } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center flex-col bg-slate-200 opacity-50 '>
            <Bars
                height="150"
                width="150"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <div className='text-3xl font-extrabold'>
            Loading...
            </div>
        </div>
    )
}

export default Loading