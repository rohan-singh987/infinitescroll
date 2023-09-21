import CardDetail from './CardDetail'

const CardComp = ({ fetchedData }) => {
  return (
    <div>
        {
            fetchedData.map((data, id) =>
                <CardDetail data={data} key={id}  />
            )
        }
    </div>
  )
}

export default CardComp