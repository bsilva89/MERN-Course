import classes from '../../../styles/Map.module.css';

const Map = (props) => {
    const inputClasses = [classes.map, props.className];

    return (
        <img src='/Capturar.JPG' className={inputClasses.join(' ')} />
    )
};

export default Map;