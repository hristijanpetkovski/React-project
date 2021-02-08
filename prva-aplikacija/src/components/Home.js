import React from 'react'
import { useSelector } from 'react-redux'
// import Counter from './../Counter'

const Home = () => {
  const { username } = useSelector((store) => store.loginReducer)
  return <h1> Welcome {username} to our music store!
    {/* <Counter />  */}
  </h1>
}

export default Home