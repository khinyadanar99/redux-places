import PlaceCard from './PlaceCard'
import Title from './Title'
import { useSelector } from 'react-redux';

function AllPlaces() {

  const places = useSelector(
        (state) => state.places.places
    );
  return (
    <>
        <Title title="All Historical Places"></Title>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13'>
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} showDetail={true} />
          ))}
        </div>
    </>
    
  )
}

export default AllPlaces