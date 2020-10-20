import classes from '../../styles/PlaceList.module.css';

import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'

const PlaceList = (props) => {
    if (props.items ==undefined) {
        return (
            <div className={classes.placelist}>
                <Card>
                    <h2>No places found. Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        )
    }

    return (
        <ul className={classes.placelist}>
            {props.items.map(places => 
                <PlaceItem 
                key={places.id}
                id={places.id}
                image={places.imageUrl}
                title={places.title}
                description={places.description}
                address={places.address}
                createId={places.creator}
                coordinates={places.location}
                />)
            }
        </ul>
    )
};

export default PlaceList;