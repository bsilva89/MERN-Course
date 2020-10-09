import classes from '../../../styles/MainHeader.module.css'

const MainHeader = (props) => (
    <header className={classes.mainheader}>
        {props.children}
    </header>
);

export default MainHeader;