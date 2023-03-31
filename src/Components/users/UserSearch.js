import React, { useContext, useState } from 'react'
import GithubContext from '../../Context/github/GithubContext'

const UserSearch = () => {
    const [text,setText] = useState('')

      const {users,searchUsers,useClear} = useContext(GithubContext)
     
     console.log(users)
    const handleSubmit = (e) => {
      e.preventDefault()
        if(text  === ''){
            alert('inter something')
         
    } 
    else{
      searchUsers(text)
      setText('')

    }
  }
    const namaBit = (e) => {
      setText(e.target.value)
  }  
 

  return (
    <>
      <form onSubmit={handleSubmit}>
   
        <input value={text} onChange={namaBit}  placeholder='Search'></input>
        <button type='submit'>Go</button>
      </form>
      {users.length > 0 && (
      <div>
        <button type='submit' onClick={useClear}>Clear</button>
      </div>

      )}
   
    </>
  )
}
 

export default UserSearch
