import React, { useContext,useEffect } from 'react'
import GithubContext from '../../Context/github/GithubContext'

const UserAbout = () => {
    const {users,loading,fetchUsers} = useContext(GithubContext)
        
   /*  useEffect(()=>{
        fetchUsers()
    },[])
     */
    
  return (
    <div>
       {users.map((t)=>(
        <ul>
            <li>{t.login}</li>
        </ul>
       ))}
    </div>
  )
}

export default UserAbout
