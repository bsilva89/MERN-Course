import classes from '../../../styles/SideDrawer.module.css'
import Backdrop from '../UIElements/Backdrop';
import { CSSTransition } from 'react-transition-group'

const SideDrawer = (props) => (
    <Backdrop clickToClose={props.clickToClose}>
        <CSSTransition 
        in={props.show} 
        timeout={200} 
        classNames='slide-in-left'
        mountOnEnter
        unmountOnExit
        >
            <aside className={classes.sidedrawer}>{props.children}</aside>
        </CSSTransition>
    </Backdrop>
);

export default SideDrawer;