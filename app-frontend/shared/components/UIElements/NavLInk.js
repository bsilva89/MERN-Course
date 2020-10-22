import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = (props) => {
    const router = useRouter()
     
    const style = {
        color: router.pathname === props.href ? 'gray' : 'black'
    }

    return (
        <Link href={props.href}>
            <a style={style}>
                {props.children}
            </a>
        </Link>)
};

export default NavLink;