import {useState, useEffect} from 'react'
import CardComp from './CardComp'
import axios from 'axios';

const Home = () => {

    const[fetchedData, setFetchedData] = useState([]);
    const [page, setPage] = useState(1)

    const getData = async() => {
        try{
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
            // const result = await axios.get(`https://api.example.com/items?page=:${page}&limit=:9`)
            console.log(result.data);
            setFetchedData(result.data)
        }
        catch(error){
            console.error("An error occured: ", error);
        }
    }

    useEffect(() => {
        getData()
    }, [page])
    



  return (
    <div>
        <CardComp fetchedData={fetchedData} />
    </div>
  )
}

export default Home