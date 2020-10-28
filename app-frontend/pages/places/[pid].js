import classes from '../../styles/[pid].module.css';
import { useRouter } from 'next/router'
import { useForm } from '../../shared/hooks/form-hooks'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';
import { useEffect, useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(true);

  const route = useRouter();
  const { pid } = route.query
  const { ...place } = props.places[0]

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  }, false)

  useEffect(() => {
    setFormData(
      {
        title: {
          value: place.title,
          isValid: true
        },
        description: {
          value: place.description,
          isValid: true
        }
      }, true)
      setIsLoading(false)
  }, [setFormData, place])

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <form onSubmit={placeUpdateSubmitHandler}>
      <h1>Place: {pid}</h1>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validator={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validator={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description with min lenght of 5."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="Submit" disabled={!formState.isValid}>
        UPDATE PLACE
            </Button>
    </form>

  )
};

export default UpdatePlace;

export async function getStaticPaths() {
  const paths = DUMMY_PLACES.map(places => ({ params: { pid: places.id } }))
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