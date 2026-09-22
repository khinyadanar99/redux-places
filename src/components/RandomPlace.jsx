import PlaceCard from './PlaceCard'
import { useDispatch, useSelector } from 'react-redux';
import { suggestRandomPlace } from '../redux/placesSlice';

function RandomPlace() {
  const dispatch = useDispatch()

  const places = useSelector(
    (state) => state.places.places
  );

  const randomPlaceId = useSelector(
    (state) => state.places.randomPlaceId
  );

  const randomPlace = places.find(
      (place) => place.id === randomPlaceId
  );

  
  return (
    <div className='mb-10'>
        <button className='btn' onClick={() => dispatch(suggestRandomPlace())}>Suggest Random Place</button>

       <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-13 mt-5'>
            <div className='md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-2 '>
                {randomPlace && (
                  <PlaceCard place={randomPlace} showDetail={true}/>
                )}
            </div>
            
        </div>

        
        

    </div>
  )
}

export default RandomPlace