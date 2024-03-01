import {useContext} from 'react'
import UserItem from './userItem'
import Spinner from '../layout/spinner.jsx'
import githubContext from '../../context/github/githubContext'

const UserList = () => {

    const gc = useContext(githubContext);

    const {loading, users} = gc;

    if(loading){
        return <Spinner />
    }
    else {
        return (
            <div style={userStyle}>
                {
                    users.map(user =>(
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </div>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'

}

export default UserList;

