import UsersList  from '../components/users/UsersList'

const Users = (props) => {
    const USERS = [{
        id: 'u1',
        name: 'Teste',
        image: 'https://avatars3.githubusercontent.com/u/42705595?s=460&u=18ed44774eb0fe3c8ddf0bb12fbb7f83c73e9873&v=4',
        places: 3
    }]

    return <UsersList items={USERS}/>
};

export default Users;
