import classes from '../../../styles/UserPlaces.module.css';
import PlaceList from '../../../components/places/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    },
]

const UserPlaces = (props) => {
    return(
        <PlaceList items={props.userPlaces}/>
    )
};

export default UserPlaces;

export async function getStaticPaths() {
    const paths = DUMMY_PLACES.map(places => ({params: {id: places.creator}}))
    return {
      paths,
      fallback: true
    }
  }

export async function getStaticProps({ params }) {
    const userPlaces = DUMMY_PLACES.filter(place => place.creator === params.id)
    return {
      props: {
        userPlaces
      }
    }
}