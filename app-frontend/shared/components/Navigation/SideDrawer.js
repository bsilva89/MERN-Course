import classes from '../../../styles/SideDrawer.module.css'
import Backdrop from '../UIElements/Backdrop';
import { CSSTransition } from 'react-transition-group'

const SideDrawer = (props) => (
    <React.Fragment>
        <CSSTransition 
            in={props.show} 
            timeout={200} 
            classNames={{
                enter: classes.slideEnter,
                enterActive: classes.slideEnterActive,
                exit: classes.slideExit,
                exitActive: classes.slideExitActive,
            }}
            mountOnEnter
            unmountOnExit
            >
                <aside className={classes.sidedrawer}>
                    {props.children}
                </aside>
        </CSSTransition>
        { props.show && <Backdrop clickToClose={props.clickToClose}/> }
    </React.Fragment>
);

export default SideDrawer;