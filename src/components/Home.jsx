import Title from './Title'
import RandomPlace from './RandomPlace'
import AllPlaces from './AllPlaces'

function Home() {

    return (
        <div className='m-8'>
        <Title title="Historical Places"></Title>

        <RandomPlace />
        
        <AllPlaces />
        </div>
    )
}

export default Home