import classes from '../../../styles/MainNavigation.module.css';

import Link from 'next/link';
import { useState } from 'react';

import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import MainHeader from './MainHeader';

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
    <React.Fragment>
        <SideDrawer clickToClose={closeDrawer} show={drawerIsOpen}> 
            <nav className={classes.mainnavigation__drawernav}>
                <NavLinks/>
            </nav>
        </SideDrawer>
        <MainHeader>
            <button 
            className={classes.mainnavigation__menubtn}
            onClick={openDrawer}>
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className={classes.mainnavigation__title}>
                <Link href='/'>YourPlaces</Link>
            </h1>
            <nav className={classes.mainnavigation__headernav}>
                <NavLinks/>
            </nav>
        </MainHeader>
    </React.Fragment>
    )
};

export default MainNavigation;