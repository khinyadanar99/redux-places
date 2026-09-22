import React from 'react'
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

        <div className='grid grid-cols-3 gap-15'>
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} showDetail={true} />
          ))}
        </div>
    </>
    
  )
}

export default AllPlaces