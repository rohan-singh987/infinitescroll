import { useState, useEffect } from 'react'
import CardComp from '../components/CardComp'
import axios from 'axios';
import bg from "../assets/pexelsanni.jpg"
import Loading from '../components/Loading';

const Home = () => {

    // State Management 
    const [fetchedData, setFetchedData] = useState([]);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true);

    // Calling Api using Axios
    const getData = async () => {
        try {
            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
            // const result = await axios.get(`https://api.example.com/items?page=:${page}&limit=:9`)
            console.log(result.data);
            setFetchedData([...fetchedData, ...result.data])
        }
        catch (error) {
            console.error("An error occured: ", error);
        }
    }

    // Handling change in page state and calling api accordingly
    useEffect(() => {
        getData()
    }, [page])


    // Function to handle Infinte Scroll
    const handelInfiniteScroll = async () => {
        try {
            if (
                // window.innerHeight returns the inner height of browser window.
                // document.documentElement.scrollTop returns the number of pixels that the document has been scrolled vertically.
                // document.documentElement.scrollHeight returns the height of the entire document, in pixels.
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                // if the height of browser + scrolled height exceeds the total total height of window then
                // we will update the value of page by 1 and since we update the value of page useEffect trigger the function getData()
                // meanwhile data is being fetch we simply show loading component
                setLoading(true);
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        // At scrolling the screen we will call the function handleInfinteScroll 
        window.addEventListener("scroll", handelInfiniteScroll);

        // Once we call the function we have to clean the previous function else useEffect will continue to call the function
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);


    return (
        <div className=' min-h-screen  bg-gradient-to-br from-red-900 to-blue-300 relative'>
            <img src={bg} className='w-full h-full object-cover absolute opacity-30 z-0' alt="" />
            <div className=' relative '>

                {/* Passing the fetched data using props */}
                <CardComp fetchedData={fetchedData} />
                {loading && <Loading />}
            </div>
        </div>
    )
}

export default Home