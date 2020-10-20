import Backdrop from './Backdrop'
import { CSSTransition } from 'react-transition-group'

import classes from '../../../styles/Modal.module.css';


const Modal = (props) => {
    const inputClasses = [classes.modal, props.className];
    const inputClassesHeader = [classes.modal__header, props.headerClass];
    const inputClassesContent = [classes.modal__content, props.contentClass];
    const inputClassesFooter = [classes.modal__footer, props.footerClass];

    return (
        <React.Fragment>
            {props.show && <Backdrop clickToClose={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames={{
                    enter: classes.modalEnter,
                    enterActive: classes.modalEnterActive,
                    exit: classes.modalExit,
                    exitActive: classes.modalExitActive
                }}>
                <div className={inputClasses.join(' ')} style={props.style}>
                    <header className={inputClassesHeader.join(' ')}>
                        <h2>{props.header}</h2>
                    </header>
                    <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                        <div className={inputClassesContent.join(' ')}>
                            {props.children}
                        </div>
                        <footer className={inputClassesFooter.join(' ')}>
                            {props.footer}
                        </footer>
                    </form>
                </div>
            </CSSTransition>
        </React.Fragment>
    )
};

export default Modal;