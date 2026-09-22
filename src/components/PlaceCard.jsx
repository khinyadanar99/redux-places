import { faArrowRight, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleVisited } from '../redux/placesSlice';

function PlaceCard({place, showDetail}) {

    const dispatch = useDispatch();

    const {id, title, description, image, isVisited} = place;
    return (
        <div className='border rounded-lg p-3'>
            <img src={image} alt={title} className='aspect-2/1 w-full'/>

            <div className='flex flex-col items-center'>
                <h3>{title}</h3>

                <p>{description}</p>

                <p className='text-orange-500'>{isVisited ? "Visited" : "Not Visited"}</p>
            </div>

            <div className={`${showDetail ? "justify-between" : "justify-center"} flex mt-5`}>
                <button className='btn' onClick={() => dispatch(toggleVisited(id))}>
                    <FontAwesomeIcon icon={faLocationPin} style={{color: "rgb(255, 255, 255)",}} />{isVisited ? "Unmark as Visited" : "Mark as Visited"}
                </button>

                {showDetail && (
                    <Link to={`/${id}`} className='btn'>
                        View Details <FontAwesomeIcon icon={faArrowRight} style={{color: "rgb(255, 255, 255)",}} />
                    </Link>
                )}
                
            </div>

        </div>
    )
}

export default PlaceCard