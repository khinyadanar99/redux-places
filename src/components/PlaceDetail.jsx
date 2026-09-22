import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PlaceCard from './PlaceCard'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PlaceDetail() {
  const { id } = useParams();

  const places = useSelector(
    (state) => state.places.places
  );

  const detailPlace = places.find(
      (place) => place.id === Number(id)
  );

  return (
    <div className='m-8'>
        <Title title="Historical Place Detail" />
        <Link to={`/`} className='btn'><FontAwesomeIcon icon={faArrowLeft} style={{color: "rgb(255, 255, 255)",}} />Go Back</Link>
        <div className='grid grid-cols-3 gap-15'>
            <div className='col-start-2'>
                <PlaceCard place={detailPlace} showDetail={false}/>
            </div>
            
        </div>
    </div>
  )
}

export default PlaceDetail