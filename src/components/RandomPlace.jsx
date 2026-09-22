import React from 'react'
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

        <div className='grid grid-cols-3 gap-15 mt-5'>
            <div className='col-start-2'>
                {randomPlace && (
                  <PlaceCard place={randomPlace} showDetail={true}/>
                )}
            </div>
            
        </div>

        
        

    </div>
  )
}

export default RandomPlace