import classes from '../../styles/UserList.module.css';
import UserItem from './UserItem'

const UserList = (props) => {
    if (props.items.lenght == 0) {
        return (
            <div className={classes.userslist}>
                <h2>No users found.</h2>
            </div>
        )
    }

    return (
        <ul className={classes.userslist}>
            {props.items.map( user => (
                <UserItem 
                    key={user.id} 
                    id={user.id} 
                    image={user.image} 
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    )
};

export default UserList;