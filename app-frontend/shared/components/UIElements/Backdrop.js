import classes from '../../../styles/Backdrop.module.css'

const Backdrop = (props) => (
    <div className={classes.backdrop} onClick={props.clickToClose}>
        {props.children}
    </div>
       
);

export default Backdrop;