import CardDetail from './CardDetail'

const CardComp = ({ fetchedData }) => {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-x-20 sm:gap-y-20 gap-y-10 mx-10 py-10 items-center'>
        {
            // maping through the array of object we have fetched from api and passing those data as a prop
            fetchedData.map((data, id) =>
                <CardDetail data={data} key={id}  />
            )
        }
    </div>
  )
}

export default CardComp