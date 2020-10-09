import classes from '../../styles/UserItem.module.css';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

import Link from 'next/link';

const UserItem = (props) => {
    return (
        <li className={classes.useritem}>
            <Card className={classes.useritem__content}>
                <Link href={`/${props.id}/places`}>
                    <section>
                        <div className={classes.useritem__image}>
                            <Avatar 
                                // className={}
                                // style={}
                                image={props.image}
                                alt={props.name}
                                // width={}
                            />
                        </div>
                        <div className={classes.useritem__info}>
                            <h2>{props.name}</h2>
                            <h3>
                                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                            </h3>
                        </div>
                    </section>
                </Link>
            </Card>
        </li>
    );
};

export default UserItem;