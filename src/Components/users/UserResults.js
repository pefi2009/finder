import React, {  useContext} from 'react'
import GithubContext from '../../Context/github/GithubContext'
import UserItem from './UserItem'
import Speinner from './Speinner'


const UserResults = () => {
    const {users,loading,fetchUsers} = useContext(GithubContext)
   
    
    
    
    if(!loading){
  return (
    <div>
        {users.map((user)=>{
        return (
            <UserItem key={user.id} user={user}></UserItem>
        )
        } )}

        <h1>Do It</h1>
    </div>
  )
}
/* else{
    return (
       <Speinner></Speinner>
    )
} */
}
export default UserResults
