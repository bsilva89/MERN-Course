import classes from '../../styles/[pid].module.css';
import { useRouter } from 'next/router'

import PlaceList from '../../components/places/PlaceList';
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';

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

const UpdatePlace = (props) => {
    const route = useRouter();
    const { pid } = route.query
    const {title}  = props.places
    return(
        <form>
            <Input 
                id="title" 
                element="input" 
                type="text"
                label="Title" 
                validator={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={() => {}}
                value={title}
                valid={true}
            />
            <Input 
                id="description" 
                element="textarea" 
                label="Description" 
                validator={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description with min lenght of 5."
                onInput={() => {}}
                value={props.places.description}
                valid={true}
            />
            <Button/>
            <h1>{title}</h1>
            <h1>Place: {pid}</h1>
            <PlaceList items={props.places}/>
        </form>
    )
};

export default UpdatePlace;

export async function getStaticPaths() {
  const paths = DUMMY_PLACES.map(places => ({params: {pid: places.id}}))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const places = DUMMY_PLACES.filter(place => place.id === params.pid)
  return {
    props: {
      places
    }
  }
}