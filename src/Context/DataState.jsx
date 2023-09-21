import React, { useEffect, useState } from 'react'
import dataContext from './DataContext'
import axios from 'axios'

const DataState = (props) => {

    const [fetchedData, setFetchedData] = useState([]);

    // Fetching Api Data
    const getData = async () => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=100&_page=${1}`)
            // const result = await axios.get(`https://api.example.com/items?page=:${page}&limit=:9`)
            setFetchedData(result.data)
        }
        catch (error) {
            console.error("An error occured: ", error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

  return (

    // wrapping and providing state data as value
    <dataContext.Provider value={fetchedData}>
        {props.children}
    </dataContext.Provider>
  )
}

export default DataState