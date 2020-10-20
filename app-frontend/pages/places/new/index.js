import classes from '../../../styles/NewPlaces.module.css'
import Input from '../../../shared/components/FormElements/Input'

const NewPlace = (props) => {
    return (
        <form className={classes.placeform}>
            <Input
            id={""}
            element="input"
            type="text"
            label="Title"
            validators={[]}
            onInput={""}
            errorText="Please enter a valid title"
            />
        </form>
    )
};

export default NewPlace;