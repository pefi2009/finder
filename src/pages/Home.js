import React from 'react'
import UserResults from '../Components/users/UserResults'
import UserSearch from '../Components/users/UserSearch'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
       <UserSearch></UserSearch>
       <UserResults></UserResults>
    </div>
  )
}

export default Home
