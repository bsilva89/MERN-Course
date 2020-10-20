import classes from '../../styles/PlaceItem.module.css';
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map'

import { useState } from 'react';

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    return (
        <React.Fragment>
            <Modal 
            show={showMap} 
            onCancel={closeMapHandler} 
            header={props.address} 
            contentClass={classes.placeitem__modalcontent}
            footerClass={classes.placeitem__modalactions}
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className={classes.map_container}>
                    <Map/>
                </div>
            </Modal>
            <li className={classes.placeitem}>
                <Card className={classes.placeitem__content}>
                    <div className={classes.placeitem__image}>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className={classes.placeitem__info}>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className={classes.placeitem__actions}>
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )
};

export default PlaceItem;