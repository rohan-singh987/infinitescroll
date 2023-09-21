import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardDetail = ({ data: { id, body, title } }) => {
    const navigate = useNavigate();

    return (
        <div className=" border p-10 bg-gradient-to-br from-[#FFF] to-[#6cc3e5e9] opacity-70 rounded-xl hover:scale-110 transition-all ease-in-out delay-100">
            <div className="flex flex-col text-center overflow-scroll text-black cursor-pointer"
                onClick={() => navigate(`/card/${id}`)}
            >
                <img src="https://via.placeholder.com/150" className='h-30 w-full sm:object-contain object-cover opacity-100' alt="" />
                <div className='w-full py-0.5 my-2 bg-gradient-to-r from-[#172B4D00] via-[#172B4D] to-[#05445E00]'></div>
                <div className='flex justify-center items-center text-xl font-extrabold'>
                    <p className="text-2xl mr-3">{id}</p>
                    <h2 className=''>{title.substr(0, 15)}</h2>
                </div>
                <p>{body.substr(0, 200)}</p>
            </div>
        </div>
    )
}

export default CardDetail