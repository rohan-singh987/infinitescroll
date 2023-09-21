import React, { useContext, useEffect, useState } from 'react'
import dataContext from '../Context/DataContext'
import { useParams } from 'react-router-dom';

const Card = () => {

    const data = useContext(dataContext)
    const { id } = useParams();
    const [fetchedData, setFetchedData] = useState({});

    useEffect(() => {
        let objData = data.find((obj) => obj.id === parseInt(id));
        if (objData) {
            setFetchedData(objData);
        }
    }, []);

    return (
        <>
            <div className="mx-auto p-8 bg-gradient-to-r from-[#8294C4] via-[#DBDFEA] to-[#D5B4B4] h-screen">
                <h1 className="flex justify-center items-center  text-gray-900 font-bold mb-[2.25rem] text-5xl font-serif ">
                    <span className="border-b-4 mt-2 border-black border-double">
                        {fetchedData.title}
                    </span>
                </h1>
                <div className="md:grid md:grid-cols-2 md:mb-4 items-center flex flex-col  my-3">
                    <img
                        className=" rounded-lg shadow-lg h-96 w-auto shadow-gray-600"
                        src="https://via.placeholder.com/150"
                        alt="SUKHAM"
                    />
                    <div className="mt-2">

                        <p className="text-gray-900 text-lg">
                            {fetchedData.body}
                        </p>


                    </div>

                </div>

            </div>
        </>
    )
}

export default Card