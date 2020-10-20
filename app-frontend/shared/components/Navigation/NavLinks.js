import classes from '../../../styles/NavLinks.module.css'
import NavLink from '../../../shared/components/UIElements/NavLink'

const NavLinks = props => {
    return (
        <ul className={classes.navlinks}>
            <NavLink href='/'>
                ALL USERS
            </NavLink>
            <NavLink href='/u1/places'>
                MY PLACES
            </NavLink>
            <NavLink href='/places/new'>
                ADD PLACES
            </NavLink>
            <NavLink href='/auth'>
                AUTHENTICATE
            </NavLink>
        </ul>
    )
}

export default NavLinks;